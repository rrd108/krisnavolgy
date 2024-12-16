<script setup>
  const props = defineProps({
    service: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="rounded">
    <NuxtLink :to="service.link">
      <h3>{{ service.title }}</h3>
      <p>{{ service.content }}</p>
      <h6>{{ service.price }}</h6>
    </NuxtLink>
  </div>
</template>

<style scoped>
  div {
    background-color: var(--light);
    text-align: left;
    opacity: 0.9;
    width: 75vw;
    height: 8rem;
    margin: 0.5em;
    padding: 0.5em;
  }
  a {
    color: var(--bg-color);
  }
  h3 {
    margin: 0.5em 0.5em 0.5em 0;
  }
  p {
    margin-bottom: 1em;
    opacity: 1;
  }
  p {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 42rem) {
    div {
      width: 20vw;
      margin: 1em;
      padding: 1em;
    }
  }
</style>
