<script setup>
  const props = defineProps({
    service: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.content }}</p>
    <h6>{{ service.price }}</h6>
  </div>
</template>

<style scoped>
  div {
    background-color: var(--light);
    border-radius: 0.5em;
    text-align: left;
    opacity: 0.9;
    width: 75vw;
    height: 8rem;
    margin: 0.5em;
    padding: 0.5em;
  }
  h3,
  p {
    margin-bottom: 1em;
    opacity: 1;
  }
  p {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 41rem) {
    div {
      width: 20vw;
      height: 9vw;
      margin: 1em;
      padding: 1em;
    }
  }
</style>
