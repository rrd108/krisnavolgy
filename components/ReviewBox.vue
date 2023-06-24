<script setup lang="ts">
  import { PropType } from 'vue'
  import Review from '~~/types/Review'

  defineProps({
    review: {
      type: Object as PropType<Review>,
      required: true,
    },
  })
</script>

<template>
  <div>
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
