<script setup lang="ts">
  const props = defineProps({
    event: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <section>
    <h6>
      <span>
        {{ event.start_date }}
      </span>
      <span v-if="event.end_date != event.start_date"> - {{ event.end_date }} </span>
    </h6>
    <div class="dg">
      <div>
        <h3>{{ event.title }}</h3>
        <small>{{ event.description }}</small>
        <NuxtLink :to="event.url">Tovább <font-awesome icon="arrow-right" /></NuxtLink>
      </div>

      <img :src="`${event.thumbnail}`" />
    </div>
  </section>
</template>

<style scoped>
  section {
    margin: 1em;
    background-color: var(--light);
    padding: 1em;
    border-radius: 0.5em;
    height: 10rem;
  }
  h6 {
    text-align: left;
  }
  div.dg {
    margin-top: 0.5em;
    text-align: left;
    grid-template-columns: 1fr 1fr;
  }
  small {
    display: block;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
  a {
    display: inline-block;
    margin: 1em auto;
  }
</style>
