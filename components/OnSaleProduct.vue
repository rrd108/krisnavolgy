<script setup lang="ts">
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  })
  const { isMobile } = useDevice()
</script>

<template>
  <section>
    <h3>{{ product.name }}</h3>
    <img :src="product.images[0].src" />
    <p>
      {{
        product.description
          .replace(/leírás/i, '')
          .replace(/<\/?[^>]+(>|$)/g, '')
          .substring(0, isMobile ? 60 : 120)
      }}...
    </p>
    <div>
      <small>{{
        Intl.NumberFormat('hu-HU', {
          style: 'currency',
          currency: 'HUF',
          maximumFractionDigits: 0,
        }).format(product.regular_price)
      }}</small>
      <span>{{
        Intl.NumberFormat('hu-HU', {
          style: 'currency',
          currency: 'HUF',
          maximumFractionDigits: 0,
        }).format(product.sale_price)
      }}</span>
    </div>
    <NuxtLink :to="product.permalink" class="button">Tovább</NuxtLink>
  </section>
</template>

<style scoped>
  section {
    padding: 1em;
  }
  h3 {
    margin-bottom: 1em;
  }
  img {
    height: 12em;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
  div > div {
    display: flex;
    gap: 1em;
    justify-content: flex-end;
    align-items: center;
  }
  small {
    text-decoration: line-through;
    display: block;
  }
  a {
    display: block;
    width: 50%;
    margin: 1em auto;
  }
</style>
