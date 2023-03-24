<script setup lang="ts">
  import { PropType } from 'vue'
  import Footer from '../types/Footer'

  const props = defineProps({
    data: {
      type: Object as PropType<Footer['Availability']>,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ data.Title }}</h3>
    <hr />
    <ul>
      <li>{{ data.Address }}</li>
      <li>{{ data.Number }}</li>
      <li>{{ data.Email }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
