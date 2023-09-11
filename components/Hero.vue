<script setup lang="ts">
  // content is query data from parent page
  // title is the page title of parent page
  const props = defineProps({
    content: Object,
  })
</script>

<template>
  <div>
    <!-- Displays page Title and Description -->
    <h1>{{content.title}}</h1>
    <h2>{{content.description}}</h2>
  </div>
</template>
