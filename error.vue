<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
  </header>
  <main>
    <h1>{{ error.statusCode }}</h1>
    <h2>A kért oldal nem található</h2>
  </main>
</template>

<style scoped>
  header {
    margin-top: 3em;
    text-align: center;
  }
  a {
    display: block;
  }
  main {
    text-align: center;
    color: var(--lighter-dark);
  }
  h1 {
    font-size: 10em;
    margin-top: 0;
  }
</style>
