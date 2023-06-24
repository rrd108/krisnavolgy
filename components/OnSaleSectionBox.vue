<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'

  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
    scrollElement: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
  })

  const emit = defineEmits<{
    (e: 'visibility', value: [number, boolean]): void
  }>()

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target, {
    scrollTarget: props.scrollElement,
  })

  watch(targetIsVisible, value => emit('visibility', [props.num, value]))
</script>

<template>
  <div ref="target">
    <h3>{{ product.name }}</h3>
    <img :src="product.images[0].src" />
    <p>
      {{
        product.description.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 112)
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
  </div>
</template>

<style scoped>
  h3 {
    margin-bottom: 1em;
    height: 2.5rem;
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
  }
  a {
    display: block;
    width: 50%;
    margin: 1em auto;
  }
</style>
