<script setup>
  useHead({
    title: 'Rendezvények'
  })

  const { touristComingFestivals } = await useFestivals()
</script>

<template>
  <h1>
    <Icon name="material-symbols:tips-and-updates-outline-rounded" />
    Rendezvények
  </h1>

  <section>
    <div v-for="festival in touristComingFestivals" :key="festival.id">
      <h2>{{ festival.title }}</h2>

      <NuxtImg
        :src="`/images/${festival?.thumbnail}`"
        :alt="festival?.title"
        sizes="sm:90vw md:20vw lg:20vw"
        :modifiers="{ format: 'webp' }"
      />

      <h3>
        {{ festival.start_date }}
        <span v-if="festival.end_date !== festival.start_date">- {{ festival.end_date }}</span>
      </h3>
      <p>{{ festival.description }}</p>
      <NuxtLink v-if="festival.url" :to="`/programok/${festival.url}`">Részletek</NuxtLink>
    </div>
  </section>

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

<style scoped>
  @media screen and (min-width: 42rem) {
    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
    }
    div:nth-child(odd) {
      background-color: var(--divider-color);
      padding: 0 1em 1em 1em;
      border-radius: 0.5em;
    }
  }
</style>
