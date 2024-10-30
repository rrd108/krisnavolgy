<script setup lang="ts">
const props = defineProps({
  festival: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section>
    <h6>
      <span>
        {{ festival.start_date }}
      </span>
      <span v-if="festival.end_date != festival.start_date">
        - {{ festival.end_date }}
      </span>
    </h6>
    <div class="dg">
      <div>
        <h3>{{ festival.title }}</h3>
        <small>{{ festival.description }}</small>
        <NuxtLink :to="festival.url"
          >Tovább
          <!--font-awesome icon="arrow-right" /--></NuxtLink
        >
      </div>

      <img :src="`${festival.thumbnail}`" />
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
