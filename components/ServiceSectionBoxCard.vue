<script setup lang="ts">
  import { PropType } from 'nuxt/dist/app/compat/capi'
  import Service from '~~/types/Service'

  const props = defineProps({
    service: {
      type: Object as PropType<Service>,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.content }}</p>
    <h6>{{ service.price }}</h6>
  </div>
</template>

<style scoped>
  h3 {
    margin: 1em 2em 0 0;
  }
  p {
    margin: 0.5em 2em 2.5em 0;
    font-size: 0.8rem;
  }
</style>
