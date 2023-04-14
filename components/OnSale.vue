<script setup lang="ts">
  const { data, pending, error, refresh } = await useFetch(
    'https://bolt.krisnavolgy.hu/wp-json/wc/v3/products',
    {
      query: {
        on_sale: 1,
        per_page: 3,
        consumer_key: import.meta.env.VITE_WEBSHOP_API_KEY,
        consumer_secret: import.meta.env.VITE_WEBSHOP_API_SECRET,
      },
    }
  )
</script>

<template>
  <section>
    <h2>Akciók</h2>
    <ul>
      <li v-for="product in data">
        {{ product.name }}
        {{ product.permalink }}
        <img :src="product.images[0].src" />
        {{ product.regular_price }}
        {{ product.sale_price }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
    padding: 1em;
    text-align: center;
  }
</style>
