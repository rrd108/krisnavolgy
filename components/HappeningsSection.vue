<script setup lang="ts">
  import { HappeningsSection } from 'types/Happening'

  const props = defineProps<{
    happenings_section: HappeningsSection
  }>()
</script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>{{ happenings_section.title }}</h2>

    <Carousel :perPage="$device.isDesktop ? 3 : 1">
      <Slide v-for="happeningBlock in happenings_section.happenings.data">
        <HappeningSectionBox :happeningBlock="happeningBlock" />
      </Slide>
    </Carousel>
    <!--HappeningFeatured /-->
  </section>
</template>

<style scoped>
  section {
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }
</style>
