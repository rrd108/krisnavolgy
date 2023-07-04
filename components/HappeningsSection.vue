<script setup lang="ts">
  import { HappeningsSection } from 'types/Happening'

  const props = defineProps<{
    happenings_section: HappeningsSection[]
  }>()

  /*const happeningSectionElement = ref(null as unknown as HTMLElement)
  const happeningSectionsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    happeningSectionsViews.value[num] = isVisible
  }*/

  const config = useRuntimeConfig()
</script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>{{ happenings_section[0].title }}</h2>

    <section>
      <Carousel>
        <ul class="horizontal-scroll">
          <li v-for="happening in happenings_section[0].happenings.data">
            <Slide>
              <div>
                <span>
                  {{ happening.attributes.happening.start_date }}
                </span>
                <span>
                  {{ happening.attributes.happening.end_date }}
                </span>
              </div>
              <h3>
                {{ happening.attributes.happening.title }}
              </h3>
              <p>{{ happening.attributes.happening.description }}</p>
              <button>
                {{ happening.attributes.happening.button.text }}
              </button>

              <img
                :src="`${config.public.strapi.url}${happening.attributes.happening.image.data.attributes.formats.thumbnail.url}`"
              />
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
