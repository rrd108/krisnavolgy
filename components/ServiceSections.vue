<script setup lang="ts">
  const { find } = useStrapi()

  const serviceSections = await find('service-sections', { populate: '*' })
</script>

<template>
  {{ serviceSections.data }}
</template>

<style scoped></style>
