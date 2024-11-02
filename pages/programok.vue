<script setup>
const { touristComingFestivals } = await useFestivals()
</script>

<template>
  <h1>
    <Icon name="material-symbols:tips-and-updates-outline-rounded" /> Programok
  </h1>

  <div v-for="festival in touristComingFestivals">
    <h2>{{ festival.title }}</h2>
    <h3>
      {{ festival.start_date }}
      <span v-if="festival.end_date !== festival.start_date">
        - {{ festival.end_date }}
      </span>
    </h3>
    <p>{{ festival.description }}</p>
  </div>
</template>

<style scoped></style>
