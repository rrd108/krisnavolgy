<script setup lang="ts">
  const route = useRoute()
  const festival = await $fetch(`/api/festival?slug=${route.params.slug}`)
</script>

<template>
  <h1>
    <Icon name="material-symbols:tips-and-updates-outline-rounded" />
    {{ festival.title }}
  </h1>
  <h3>{{ festival.start_date }} - {{ festival.end_date }}</h3>

  <p>{{ festival.description }}</p>
  <NuxtImg
    :src="`/images/${festival.thumbnail}`"
    :alt="festival.title"
    sizes="sm:100vw md:100vw lg:100vw"
    :modifiers="{ format: 'webp' }"
  />
  <p>{{ festival.long_description }}</p>
</template>

<style scoped></style>
