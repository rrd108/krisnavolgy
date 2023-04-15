<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import EventSection from '../types/EventSection'

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

  const eventSectionElement = ref(null as unknown as HTMLElement)
  const eventSectionsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    eventSectionsViews.value[num] = isVisible
  }
</script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h2>{{ eventSection.data.attributes.title }}</h2>
    <div class="touch-right">
      <ul ref="eventSectionElement" class="horizontal-scroll">
        <li v-for="(evt, i) in eventSection.data.attributes.Event_display">
          <EventSectionBox
            v-if="eventSectionElement"
            :evt="evt"
            :num="i"
            :scrollElement="eventSectionElement"
            @visibility="visibilityChanged"
          />
        </li>
      </ul>

      <Pager
        :color="'#000'"
        :length="eventSection.data?.attributes.Event_display.length"
        :visible="eventSectionsViews"
      />
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
    background-color: var(--light);
  }
  li:last-child {
    margin-right: calc(1em + var(--horizontal-scroll-padding-right));
  }
</style>
