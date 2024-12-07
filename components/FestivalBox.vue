<script setup lang="ts">
  const props = defineProps({
    festival: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <section>
    <h6>
      <span>
        {{ festival.start_date }}
      </span>
      <span v-if="festival.end_date != festival.start_date">- {{ festival.end_date }}</span>
    </h6>
    <div class="dg">
      <div>
        <h3>{{ festival.title }}</h3>
        <NuxtLink :to="`/programok/${festival.url}`">
          {{ festival.description }}
        </NuxtLink>
      </div>

      <NuxtImg
        :src="`/images/${festival.thumbnail}`"
        :alt="festival.title"
        sizes="sm:100vw md:100vw lg:100vw"
        :modifiers="{ format: 'webp' }"
      />
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
  div {
    unicode-bidi: plaintext;
  }
  div.dg {
    margin-top: 0;
    text-align: left;
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    margin: 0 0 0.5em 0;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }
  a {
    color: var(--bg-color);
  }
</style>
