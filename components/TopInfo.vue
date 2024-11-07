<script setup lang="ts">
const hasContent = ref(true)
</script>

<template>
  <section v-if="hasContent">
    <h3><Icon name="material-symbols:lightbulb" /> Ünnepi nyitvatartás</h3>
    <p>December 24-26 NYITVA</p>
  </section>
  <div v-if="!hasContent">
    <Divider />
  </div>
</template>

<style scoped>
section {
  margin-top: -1em;
  background-color: var(--lighter-dark);
  color: var(--light);
  padding: 1em;
}
h3,
p {
  margin: 0;
}
h3 {
  margin-bottom: 0.5em;
}
div {
  text-align: center;
}
</style>
