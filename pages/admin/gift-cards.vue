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
        <th>Módosítva</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in data" :key="order.id">
        <td>{{ order.created_at }}</td>
        <td>{{ order.id }}</td>
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
        <td>{{ order.modified_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
