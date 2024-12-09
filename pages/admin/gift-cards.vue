<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })
  const userStore = useUserStore()

  const { data } = await useFetch('/api/orders', {
    headers: {
      Token: userStore.token
    }
  })

  const setPosted = async (id: number) => {
    const result = await useFetch('/api/orders', {
      method: 'PATCH',
      headers: {
        Token: userStore.token
      },
      body: { id, posted: true }
    })

    if (result.data.value.success) {
      data.value = data.value.map((order) => (order.id === id ? { ...order, posted: true } : order))
    }
  }

  const setUsed = async (id: number) => {
    const result = await useFetch('/api/orders', {
      method: 'PATCH',
      headers: {
        Token: userStore.token
      },
      body: { id, used: true }
    })

    if (result.data.value.success) {
      data.value = data.value.map((order) => (order.id === id ? { ...order, used: true } : order))
    }
  }
</script>

<template>
  <h1>
    <Icon name="material-symbols:featured-seasonal-and-gifts" />
    Ajándékutalványok
  </h1>
  <table>
    <thead>
      <tr>
        <th>Dátum</th>
        <th>ID</th>
        <th>
          Név
          <br />
          Email
        </th>
        <th>Cím</th>
        <th>Számla</th>
        <th>Jegy</th>
        <th>Ebéd</th>
        <th>Összeg</th>
        <th>Tranzakció</th>
        <th>Státusz</th>
        <th>Postázva</th>
        <th>Felhasználva</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in data" :key="order.id" :title="order.modified_at">
        <td>
          <small>{{ order.created_at }}</small>
        </td>
        <td>
          <small>{{ order.id.slice(0, 6) }} {{ order.id.slice(6) }}</small>
        </td>
        <td>
          {{ order.name }}
          <br />
          {{ order.email }}
        </td>
        <td>{{ order.address }}</td>
        <td>
          {{ order.invoice_name }} {{ order.invoice_tax_number }} {{ order.invoice_zip }}
          {{ order.invoice_city }} {{ order.invoice_address }}
        </td>
        <td class="tc">{{ order.ticket || '-' }}</td>
        <td class="tc">{{ order.lunch || '-' }}</td>
        <td>
          {{
            Intl.NumberFormat('hu-HU', {
              style: 'currency',
              currency: 'HUF',
              useGrouping: true,
              maximumFractionDigits: 0
            }).format(order.total)
          }}
        </td>
        <td>
          <small>{{ order.transaction_id }}</small>
        </td>
        <td>
          <span :class="order.status" class="rounded">{{ order.status }}</span>
        </td>
        <td class="tc">
          <small>
            {{ order.posted }}
            <FormKit
              v-if="!order.posted"
              type="checkbox"
              :model-value="order.posted"
              @click="setPosted(order.id)"
            />
          </small>
        </td>
        <td class="tc">
          <small>
            {{ order.used }}
            <FormKit
              v-if="!order.used"
              type="checkbox"
              :model-value="order.used"
              @click="setUsed(order.id)"
            />
          </small>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  .FAIL,
  .SUCCESS {
    background-color: var(--error);
    color: var(--light);
    padding: 0.5em 1em;
    font-size: 0.8em;
  }
  .SUCCESS {
    background-color: var(--success);
    color: var(--light);
  }
</style>
