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
    <Carousel>
      <ul class="horizontal-scroll">
        <li v-for="(product, i) in data">
          <Slide>
            <OnSaleSectionBox :product="product" />
          </Slide>
        </li>
      </ul>
    </Carousel>
  </section>
</template>

<style scoped>
  section {
    padding: 2em 0 0 var(--horizontal-scroll-padding-right);
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
    li:last-child {
      margin-right: calc(1em + var(--horizontal-scroll-padding-right));
    }
  }
</style>
