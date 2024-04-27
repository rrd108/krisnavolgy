<script setup lang="ts">
  const props = defineProps({
    testimonial: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div ref="target">
    <p>{{ testimonial.text }}</p>
    <small>{{ testimonial.name }}</small>
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
