<script setup lang="ts">
  import { ref } from 'vue'
  import WoocommerceProduct from '../types/WoocommerceProduct'
  import carousel from 'plugins/carousel'

  const { data } = await useFetch<WoocommerceProduct[]>(
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
    <h2>Akciók TODO</h2>
    <Carousel :centerMode="true" :perPage="4">
      <Slide v-for="(product, i) in data">
        <OnSaleSectionBox :product="product" />
      </Slide>
    </Carousel>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
    background-color: var(--light);
  }
  h2 {
    margin: 1em;
  }

  @media screen and (min-width: 64rem) {
    li {
      width: 25vw;
    }
  }
</style>
