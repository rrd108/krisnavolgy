<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import EventSection from '../types/EventSection'

  const config = useRuntimeConfig()

  const client = useStrapiClient()
  let eventSection = {} as StrapiResponse<EventSection>
  try {
    eventSection = await client<StrapiResponse<EventSection>>(
      '/event-section',
      {
        params: {
          populate: 'Event_display.Event_button,Event_display.Event_image',
        },
      }
    )
  } catch (error) {
    console.error(error)
  }
</script>

<template>
  <section>
    <h2>{{ eventSection.data.attributes.title }}</h2>
    <ul>
      <li v-for="event in eventSection.data.attributes.Event_display">
        <h4>{{ event.event_beginning_date }} {{ event.event_end_date }}</h4>
        <h3>{{ event.Event_name }}</h3>
        <p>{{ event.Event_short_description }}</p>
        <picture>
          <source
            media="(max-width: 800px)"
            :srcset="`${config.public.strapi.url}${event.Event_image.data.attributes.formats.thumbnail.url}`"
          />
          <source
            :srcset="`${config.public.strapi.url}${event.Event_image.data.attributes.formats.small.url}`"
          />
          <img
            :src="`${config.public.strapi.url}${event.Event_image.data.attributes.formats.small.url}`"
          />
        </picture>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  section {
    margin-top: 2em;
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }
</style>
