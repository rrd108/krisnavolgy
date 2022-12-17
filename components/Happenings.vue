<script setup lang="ts">
  import Happening from '../types/Happening'

  const { find } = useStrapi()

  const config = useRuntimeConfig()
  const today = new Date()
  const fields = ['date', 'name', 'description']
  const sort = 'date'
  const pagination = { page: 1, pageSize: 3 }
  const filters = {
    date: { $gte: today.toISOString().substring(0, 10) },
    featured: {},
  }

  const happenings = await find<Happening>('happenings', {
    fields,
    sort,
    pagination,
    filters,
  })

  const populate = '*'
  pagination.pageSize = 1
  filters.featured = { $eq: 1 }
  const featured = await find<Happening>('happenings', {
    fields,
    sort,
    pagination,
    filters,
    populate,
  })
</script>

<template>
  <div>
    <h1>Események</h1>
    <ul>
      <li v-for="happening in happenings.data">
        {{ happening.attributes.date.substring(5) }}
        {{ happening.attributes.name }}
      </li>
    </ul>
    {{ featured.data[0].attributes.date }}
    {{ featured.data[0].attributes.name }}
    {{ featured.data[0].attributes.description }}
    <picture>
      <source
        :srcset="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.thumbnail.url}`"
        media="(max-width: 380px)"
      />
      <source
        :srcset="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.small.url}`"
        media="(max-width: 800px)"
      />
      <source
        :srcset="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.medium.url}`"
      />
      <img
        :src="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.thumbnail.url}`"
        :alt="featured.data[0].attributes.name"
      />
    </picture>
  </div>
</template>

<style scoped></style>
