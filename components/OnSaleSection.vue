<script setup lang="ts">
  import WoocommerceProduct from '../types/WoocommerceProduct'

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

  const onSaleSectionElement = ref(null as unknown as HTMLElement)
  const onSaleSectionsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    onSaleSectionsViews.value[num] = isVisible
  }
</script>

<template>
  <section>
    <h2>Akciók</h2>
    <ul ref="onSaleSectionElement" class="horizontal-scroll">
      <li v-for="product in data">
        <OnSaleSectionBox
          :product="product"
          :scrollElement="onSaleSectionElement"
          @visibility="visibilityChanged"
        />
      </li>
    </ul>

    <Pager
      :color="'#000'"
      :length="data?.length || 1"
      :visible="onSaleSectionsViews"
    />
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
    padding: 1em 0 1em 1em;
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }
</style>
