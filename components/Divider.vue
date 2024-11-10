<script setup>
const { isMobile } = useDevice()
</script>

<template>
  <NuxtImg
    :src="isMobile ? '/images/divider.png' : '/images/divider-desktop.png'"
    alt="divider"
    sizes="sm:100vw md:100vw lg:100vw"
    :modifiers="{ format: 'webp' }"
    class="center"
  />
</template>

<style scoped>
</style>
