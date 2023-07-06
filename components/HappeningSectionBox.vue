<script setup lang="ts">
  import { Happening } from 'types/Happening'

  const props = defineProps({
    happening: {
      type: Object as PropType<Happening>,
      required: true,
    },
  })

  const config = useRuntimeConfig()
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

      <button>
        {{ happening.button.text }}
      </button>
    </div>

    <img
      :src="`${config.public.strapi.url}${happening.image.data.attributes.formats.thumbnail.url}`"
    />
  </section>
</template>

<style scoped>
  section {
    background-color: var(--light);
    padding: 1em;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    width: 100%;
    border-radius: 0.5em;
  }
</style>
