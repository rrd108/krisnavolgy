<script setup lang="ts">
  import { FooterItem } from 'types/Footer'
  import { PropType } from 'vue'

  const props = defineProps({
    data: {
      type: Object as PropType<FooterItem>,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ data.title }}</h3>
    <ul>
      <li v-for="item in data.item">{{ item.content }}</li>
    </ul>
  </div>
</template>

<style scoped>
  h3 {
    border-bottom: 0.1em solid var(--link-color);
  }
</style>
