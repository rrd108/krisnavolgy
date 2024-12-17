<script setup lang="ts">
  const { data } = await useFetch('https://bolt.krisnavolgy.hu/wp-json/wc/v3/products', {
    query: {
      on_sale: 1,
      per_page: 3,
      consumer_key: import.meta.env.VITE_WEBSHOP_API_KEY,
      consumer_secret: import.meta.env.VITE_WEBSHOP_API_SECRET
    }
  })

  const { isMobile } = useDevice()
</script>

<template>
  <section>
    <h2>Akciók</h2>
    <Carousel
      :items-to-show="isMobile ? 1.2 : 3"
      snap-align="start"
      :autoplay="2500"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
    >
      <Slide v-for="(product, i) in data" :key="product.id">
        <OnSaleProduct :product="product" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
    padding-top: 1em;
  }
  h2 {
    margin: 1em;
    text-align: center;
  }

  @media screen and (min-width: 42rem) {
    section {
      padding-bottom: 1em;
    }
  }
</style>
