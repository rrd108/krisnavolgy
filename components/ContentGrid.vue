<script setup lang="ts">
  const config = useRuntimeConfig()
  // content is query data from parent page
  // title is the page title of parent page
  const props = defineProps({
    content: Object,
  })
</script>

<template>
  <div>
      <div v-for="zone in content.pageZone" :key="zone.id" >
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
      </div>
    </div>
</template>
