<script setup lang="ts">
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  const { isMobile } = useDevice()
</script>

<template>
  <section>
    <h3>{{ product.name }}</h3>

    <NuxtImg
      :src="product.images[0].src"
      :alt="product.name"
      sizes="sm:100vw md:100vw lg:100vw"
      :modifiers="{ format: 'webp' }"
      class="rounded"
    />

    <p>
      {{
        product.description
          .replace(/leírás/i, '')
          .replace(/<\/?[^>]+(>|$)/g, '')
          .substring(0, isMobile ? 60 : 120)
      }}...
    </p>
    <div>
      <small>
        {{
          Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
            maximumFractionDigits: 0
          }).format(product.regular_price)
        }}
      </small>
      <span>
        {{
          Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
            maximumFractionDigits: 0
          }).format(product.sale_price)
        }}
      </span>
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
    width: 100%;
    height: 12em;
    object-fit: cover;
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
