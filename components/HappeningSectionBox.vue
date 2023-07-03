<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { useElementVisibility } from '@vueuse/core'

  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
    evt: {
      type: Object as PropType<{
        event_beginning_date: string
        event_end_date: string
        Event_name: string
        Event_short_description: string
        Event_image: {
          data: {
            attributes: {
              formats: {
                small: {
                  url: string
                }
                thumbnail: {
                  url: string
                }
              }
            }
          }
        }
      }>,
      required: true,
    },
    scrollElement: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
  })

  const emit = defineEmits<{
    (e: 'visibility', value: [number, boolean]): void
  }>()

  const config = useRuntimeConfig()
  const target = ref(null)
  const targetIsVisible = useElementVisibility(target, {
    scrollTarget: props.scrollElement,
  })

  watch(targetIsVisible, value => emit('visibility', [props.num, value]))
</script>

<template>
  <div ref="target" class="event">
    <div>
      <h4>{{ evt.event_beginning_date }} {{ evt.event_end_date }}</h4>
      <h3>{{ evt.Event_name }}</h3>
      <small>{{ evt.Event_short_description }}</small>
    </div>
    <picture>
      <source
        media="(max-width: 800px)"
        :srcset="`${config.public.strapi.url}${evt.Event_image.data.attributes.formats.thumbnail.url}`"
      />
      <source
        :srcset="`${config.public.strapi.url}${evt.Event_image.data.attributes.formats.small.url}`"
      />
      <img
        :src="`${config.public.strapi.url}${evt.Event_image.data.attributes.formats.small.url}`"
      />
    </picture>
  </div>
</template>

<style scoped>
  .event {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5em;
  }
  h3 {
    margin-bottom: 1em;
  }
  img {
    width: 100%;
    border-radius: 0.5em;
  }
</style>
