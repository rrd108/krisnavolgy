<script setup lang="ts">
const { isMobile } = useDevice();

// TODO max length!
const events = [
  {
    start_date: "2024. április 20.",
    end_date: "2024. április 20.",
    title: "Boldog Boci",
    description: "Egyedülálló élményt nyújt az állatok tiszteletéről.",
    url: "/",
    thumbnail: `/images/logo.png`, // TODO add images
  },
  {
    start_date: "2024. május 18.",
    end_date: "2024. május 18.",
    title: "India Varázsa",
    description: "Merülj el az indiai kultúra varázsában nálunk!",
    url: "/",
    thumbnail: `/images/logo.png`, // TODO add images
  },
  {
    start_date: "2024. június 22.",
    end_date: "2024. június 22.",
    title: "Holi",
    description: "A boldogság és a barátság színes porokká válnak. ",
    url: "/",
    thumbnail: `/images/logo.png`, // TODO add images
  },
  {
    start_date: "2024. július 26.",
    end_date: "2024. július 28.",
    title: "Búcsú",
    description: "Krisna-völgy legnagyobb eseménye",
    url: "/",
    thumbnail: `/images/logo.png`, // TODO add images
  },
  {
    start_date: "2024. augusztus 17. ",
    end_date: "2024. augusztus 18. ",
    title: "India Napok",
    description: "Az indiai kultúra minden szegletét megismerheted.",
    url: "/",
    thumbnail: `/images/logo.png`, // TODO add images
  },
];
</script>

<template>
  <section>
    <picture>
      <!-- TODO replace with nuxt image -->
      <source media="(max-width: 40rem)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>Közelgő események</h2>

    <Carousel
      :itemsToShow="isMobile ? 1.1 : 4.5"
      snapAlign="start"
      :autoplay="2500"
      :pauseAutoplayOnHover="true"
      :wrapAround="true"
      dir="rtl"
    >
      <Slide v-for="(event, i) in events" :key="event.title">
        <EventBox :event="event" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
