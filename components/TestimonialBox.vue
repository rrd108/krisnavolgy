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
    <Icon name="material-symbols:format-quote" />
    <p>{{ testimonial.text }}</p>
    <small>{{ testimonial.name }}</small>
  </div>
</template>

<style scoped>
  p {
    font-style: italic;
    padding-inline: 1em;
  }
  small {
    display: block;
    margin-top: 1em;
    text-align: right;
  }
  span {
    font-size: 6em;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.1;
  }
</style>
