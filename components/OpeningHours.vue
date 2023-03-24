<script setup lang="ts">
  import { PropType } from 'vue'

  interface Data {
    Title: string
    Opening_hours: string
  }

  const props = defineProps({
    data: {
      type: Object as PropType<Data>,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ data.Title }}</h3>
    <hr />
    <p>{{ data.Opening_hours }}</p>
  </div>
</template>

<style scoped></style>
