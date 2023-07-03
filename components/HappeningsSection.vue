<script setup lang="ts">
  import { HappeningsSection } from 'types/Happening'

  const props = defineProps<{
    happenings_section: HappeningsSection
  }>()

  const happeningSectionElement = ref(null as unknown as HTMLElement)
  const happeningSectionsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    happeningSectionsViews.value[num] = isVisible
  }

  const config = useRuntimeConfig()
</script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>{{ happenings_section.title }}</h2>

    <div class="grid">
      <ul>
        <li v-for="happening in happenings_section.happenings.data">
          <div>
            <span>
              {{ happening.attributes.event_text_box.date.substring(0, 8) }}
            </span>
            <span>
              {{ happening.attributes.event_text_box.date.substring(8, 16) }}
            </span>
          </div>
          <h3>
            {{ happening.attributes.event_text_box.title }}
          </h3>
          <p>{{ happening.attributes.event_text_box.event_description }}</p>
          <button>
            {{ happening.attributes.event_text_box.button.button_text }}
          </button>

          <img
            :src="`${config.public.strapi.url}${happening.attributes.event_text_box.image.data.attributes.formats.thumbnail.url}`"
          />
        </li>
      </ul>
      <!--HappeningFeatured /-->
    </div>
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
    width: 85vw;
  }
  li:last-child {
    margin-right: calc(1em + var(--horizontal-scroll-padding-right));
  }
</style>
