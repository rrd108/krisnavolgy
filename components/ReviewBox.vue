<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import Review from '~~/types/Review'

  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
    review: {
      type: Object as PropType<Review>,
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
    <p>{{ review.review_content }}</p>
    <small>{{ review.reviewer_name }}</small>
  </div>
</template>

<style scoped>
  p {
    font-style: italic;
  }
  small {
    display: block;
    margin-top: 1em;
    text-align: right;
  }
</style>
