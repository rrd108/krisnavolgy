<script setup lang="ts">
  import { ref } from 'vue'
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
  <div class="touch-right">
    <h2>Akciók</h2>
    <ul ref="onSaleSectionElement" class="horizontal-scroll">
      <li v-for="(product, i) in data">
        <OnSaleSectionBox
          v-if="onSaleSectionElement"
          :product="product"
          :num="i"
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
  </div>
</template>

<style scoped>
  div {
    background-color: var(--light);
    padding: 1em 0;
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 64rem) {
    li {
      width: 25%;
    }
  }
</style>
