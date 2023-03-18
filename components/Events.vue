<script setup lang="ts"></script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>Közlegő események</h2>
  </section>
</template>

<style scoped>
  section {
    margin-top: 2em;
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }
</style>
