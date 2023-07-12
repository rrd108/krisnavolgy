<script setup lang="ts">
  import { SocialMedia } from '../types/Footer'
  import { PropType } from 'vue'

  const props = defineProps({
    socialMedia: {
      type: Object as PropType<SocialMedia>,
      required: true,
    },
  })
</script>

<template>
  <div>
    <h3>{{ socialMedia.title }}</h3>
    <ul class="df">
      <li v-for="item in socialMedia.social_media_bars.data">
        <NuxtLink :to="item.attributes.social_media_icons.link">
          <ClientOnly>
            <font-awesome-icon
              :icon="item.attributes.social_media_icons.fontawesome_icon"
            />
          </ClientOnly>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
