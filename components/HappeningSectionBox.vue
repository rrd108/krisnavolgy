<script setup lang="ts">
  import { Happening, HappeningBlock } from 'types/Happening'

  const props = defineProps({
    happeningBlock: {
      type: Object as PropType<HappeningBlock>,
      required: true,
    },
  })

  const config = useRuntimeConfig()

  const happening = props.happeningBlock.attributes.happening as Happening
</script>

<template>
  <section>
    <div>
      <h6>
        <span>
          {{ happening.start_date }}
        </span>
        <span>
          {{ happening.end_date }}
        </span>
      </h6>

      <h3>
        {{ happening.title }}
      </h3>

      <p>{{ happening.description }}</p>

      <NuxtLink :to="happening.button.url" class="button">{{
        happening.button.text
      }}</NuxtLink>
    </div>

    <img
      :src="`${config.public.strapi.url}${happening.image.data.attributes.formats.thumbnail.url}`"
    />
  </section>
</template>

<style scoped>
  section {
    margin: 1em;
    background-color: var(--light);
    padding: 1em;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    width: 100%;
    height: 10em;
    object-fit: cover;
    border-radius: 0.5em;
  }
  a {
    display: inline-block;
    margin: 1em auto;
  }
</style>
