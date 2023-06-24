<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import Service from '~~/types/Service'

  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
    service: {
      type: Object as PropType<Service>,
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
    <h3>{{ service.title }}</h3>
    <p>{{ service.content }}</p>
    <h6>{{ service.price }}</h6>
  </div>
</template>

<style scoped>
  div {
    height: 100%;
    display: grid;
  }
  h3 {
    margin: 1em 2em 0 0;
  }
  p {
    margin: 0.5em 2em 2.5em 0;
    font-size: 0.8rem;
  }
</style>
