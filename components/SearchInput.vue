<script setup lang="ts">
  const props = defineProps<{
    placeholder: string
  }>()
</script>

<template>
  <div>
    <ClientOnly>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </ClientOnly>

    <input type="search" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
  div {
    border: thin solid #aaa;
    border-radius: 0.5em;
    display: flex;
    gap: 0.5em;
    padding: 0.25em;
    margin: 0.5em 0;
  }
  input {
    border: none;
  }
  input:focus-visible {
    outline: none;
  }
</style>
