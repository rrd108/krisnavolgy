<script setup lang="ts">
  const emit = defineEmits(['select'])
  const userStore = useUserStore()

  const images = ref<{ name: string; path: string }[]>([])

  const response = await $fetch('/api/gallery', {
    headers: {
      Token: userStore.token
    }
  })
  images.value = response.images
</script>

<template>
  <h1>
    <Icon name="jam:pictures" />
    Galéria
  </h1>
  <ul v-if="images.length > 0">
    <li v-for="image in images" :key="image.name" @click="emit('select', image.name)">
      <NuxtImg :src="image.path" sizes="sm:100px md:200px lg:200px" loading="lazy" />
      <small>{{ image.name }}</small>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: 12em;
    object-fit: scale-down;
  }
</style>
