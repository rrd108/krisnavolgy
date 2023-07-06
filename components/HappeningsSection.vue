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

    <section>
      {{ happenings_section.happenings.data }}
      <Carousel>
        <ul class="horizontal-scroll">
          <li v-for="happening in happenings_section.happenings.data">
            <Slide>
              <HappeningSectionBox :happening="happening" />
            </Slide>
          </li>
        </ul>
      </Carousel>
      <!--HappeningFeatured /-->
    </section>
  </section>
</template>

<style scoped>
  section {
    margin: 2em 0 0 var(--horizontal-scroll-padding-right);
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }

  li {
    width: 25vw;
  }
  li:last-child {
    margin-right: calc(1em + var(--horizontal-scroll-padding-right));
  }
</style>
