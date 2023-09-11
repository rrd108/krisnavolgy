<script setup lang="ts">
import { contentQuery } from "~/querys/content"
const graphql = useStrapiGraphQL()
const route = useRoute()
const slug = route.params.slug
const result = await graphql(contentQuery, { "Slug": slug })

let page : object
if (result.data.pages.data[0]) page = result.data.pages.data[0].attributes

</script>

<template>
  <div v-if="page">
    <Hero :content="page" />
    <ContentGrid :content="page" />
  </div>
  <div v-else >
    <h1>Sorry page not found</h1>
  </div>
</template>
