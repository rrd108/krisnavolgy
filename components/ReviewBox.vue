<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'
  import { Review } from 'types/Review'

  const props = defineProps({
    review: {
      type: Object as PropType<Review>,
      required: true,
    },
  })
</script>

<template>
  <div ref="target">
    <p>{{ review.content }}</p>
    <small>{{ review.name }}</small>
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
