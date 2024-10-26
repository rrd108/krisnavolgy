<script setup>
import { touristComingEvents } from '~/data/events';
</script>

<template>
  <h1><Icon name="material-symbols:tips-and-updates-outline-rounded" /> Programok</h1>

  <div v-for="event in touristComingEvents">
    <h2>{{ event.title }}</h2>
    <h3>
      {{ event.start_date }}
      <span v-if="event.end_date !== event.start_date">
        - {{ event.end_date }}
        </span>
    </h3>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
