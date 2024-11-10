<script setup lang="ts">
const { isMobile } = useDevice()
const { touristComingFestivals } = await useFestivals()
</script>

<template>
  <section>
    <Divider />

    <h2>Közelgő események</h2>

    <Carousel
      :items-to-show="isMobile ? 1.1 : 4.5"
      snap-align="start"
      :autoplay="2500"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
      dir="rtl"
    >
      <Slide
        v-for="(festival, i) in touristComingFestivals"
        :key="festival.title"
      >
        <FestivalBox :festival />
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
