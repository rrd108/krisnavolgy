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
        <th>Név</th>
        <th>Email</th>
        <th>Cím</th>
        <th>Számla</th>
        <th>Jegy</th>
        <th>Ebéd</th>
        <th>Összeg</th>
        <th>Tranzakció</th>
        <th>Státusz</th>
        <th>Postázva</th>
        <th>Felhasználva</th>
        <th>Módosítva</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in data" :key="order.id">
        <td>{{ order.created_at }}</td>
        <td>{{ order.id.slice(0, 6) }} {{ order.id.slice(6) }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.email }}</td>
        <td>{{ order.address }}</td>
        <td>
          {{ order.invoice_name }} {{ order.invoice_tax_number }} {{ order.invoice_zip }}
          {{ order.invoice_city }} {{ order.invoice_address }}
        </td>
        <td>{{ order.ticket }}</td>
        <td>{{ order.lunch }}</td>
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
        <td>{{ order.transaction_id }}</td>
        <td>{{ order.status }}</td>
        <td class="tc">
          {{ order.posted }}
          <FormKit
            v-if="!order.posted"
            type="checkbox"
            :model-value="order.posted"
            @click="setPosted(order.id)"
          />
        </td>
        <td class="tc">
          {{ order.used }}
          <FormKit
            v-if="!order.used"
            type="checkbox"
            :model-value="order.used"
            @click="setUsed(order.id)"
          />
        </td>
        <td>{{ order.modified_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
