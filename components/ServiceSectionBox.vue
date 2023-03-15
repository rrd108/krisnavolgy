<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'

  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
    service: {
      type: Object as PropType<{
        Description: any
        Prices: any
        Title: string
      }>,
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
    <h3>{{ service.Title }}</h3>
    <p>{{ service.Description }}</p>
    <h6>{{ service.Prices }}</h6>
  </div>
</template>

<style scoped>
  h3 {
    margin: 1em 0 2em 0;
    z-index: 1;
  }
  p {
    margin: 1em 2em 1em 0;
    z-index: 1;
  }
</style>
