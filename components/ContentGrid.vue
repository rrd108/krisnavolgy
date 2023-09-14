<script setup lang="ts">
const config = useRuntimeConfig();
// content is query data from parent page
const props = defineProps({
  content: Object,
});

</script>

<template>
  <div>
    <div v-for="zone in content.pageZone" :key="zone.id">
      <!-- Display all richText here -->
      <div v-if="zone.__typename === 'ComponentPageRichText'">
        <p>{{ zone.richText }}</p>
      </div>

      <!-- Displays all Quotes here -->
      <div v-if="zone.__typename === 'ComponentPageQuote'">
        <p>{{ zone.quote }}</p>
        <p>by {{ zone.quoter }}</p>
      </div>

      <!-- Displays all Images -->
      <div v-if="zone.__typename === 'ComponentPageImage'">
        <img :src="config.public.strapi.url + zone.image.data.attributes.url" />
        <p>{{ zone.caption }}</p>
      </div>
      <!-- Displays all Links-->
      <div v-if="zone.__typename === 'ComponentPageLink'">
        <NuxtLink :class="zone.style" :to="zone.url">{{ zone.label }}</NuxtLink>
      </div>

      <!-- Displays all Video's-->
      <div v-if="zone.__typename === 'ComponentPageVideo'">
        <Video :video_link="zone.embedUrl" />
      </div>
      <!-- Displays all Subscribe forms-->
      <div v-if="zone.__typename === 'ComponentPageSubscribeForm'">
        <MailchimpSubscribe :content="zone" />
      </div>
    </div>
  </div>
</template>
