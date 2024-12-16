<script setup lang="ts">
  const props = defineProps({
    festival: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <section class="rounded">
    <h6>
      <span>{{ festival.start_date }}</span>
      <span v-if="festival.end_date != festival.start_date">- {{ festival.end_date }}</span>
    </h6>
    <NuxtLink :to="`/programok/${festival.url}`">
      <div>
        <NuxtImg
          :src="`/images/${festival.thumbnail}`"
          :alt="festival.title"
          sizes="sm:100vw md:100vw lg:100vw"
          :modifiers="{ format: 'webp' }"
          class="rounded"
        />

        <h3>{{ festival.title }}</h3>
        {{ festival.description }}
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped>
  section {
    margin: 1em;
    background-color: var(--light);
    padding: 1em;
    height: 17rem;
  }
  h6 {
    text-align: left;
  }
  div {
    margin-top: 0;
    text-align: left;
  }
  h3 {
    margin: 0 0 0.5em 0;
  }
  img {
    width: 100%;
    height: 6em;
    object-fit: cover;
    margin-bottom: 1em;
  }
  a {
    color: var(--bg-color);
  }

  @media (min-width: 42rem) {
    section {
      height: 20rem;
    }
  }
</style>
