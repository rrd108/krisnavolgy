<script setup>
  const { touristComingFestivals } = await useFestivals()
</script>

<template>
  <h1>
    <Icon name="material-symbols:tips-and-updates-outline-rounded" />
    Programok
  </h1>

  <div v-for="festival in touristComingFestivals" :key="festival.id">
    <h2>{{ festival.title }}</h2>
    <h3>
      {{ festival.start_date }}
      <span v-if="festival.end_date !== festival.start_date">- {{ festival.end_date }}</span>
    </h3>
    <p>{{ festival.description }}</p>
    <NuxtLink v-if="festival.url" :to="`/programok/${festival.url}`">Részletek</NuxtLink>
  </div>

  <Divider />

  <h3>Érdekelhet még</h3>
  <ul>
    <li>
      <NuxtLink to="/belepojegy">Egyéni jegyek</NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://elvonulas.krisnavolgy.hu">Elvonulások</NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://vendeghaz.krisnavolgy.hu">Vendégház</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
