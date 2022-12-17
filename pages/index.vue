<script setup lang="ts">
  //import Happening from '../types/Happening'
  //const { find } = useStrapi()
  //const happenings = await find<Happening>('happenings')

  const config = useRuntimeConfig()
  const today = new Date()
  const fields = 'date,name,description'
  const sort = 'date'
  const limit = 'pagination[page]=1&pagination[pageSize]=3'
  const filterDate = `filters[date][$gte]=${today
    .toISOString()
    .substring(0, 10)}`

  const { data: happenings } = await useFetch(
    `${config.public.strapi.url}${config.public.strapi.prefix}/happenings?fields=${fields}&sort=${sort}&${limit}&${filterDate}`
  )

  const populate = 'populate=*'
  const limitFeatured = 'pagination[page]=1&pagination[pageSize]=1'
  const filterFeatured = 'filters[featured][$eq]=1'
  const { data: featured } = await useFetch(
    `${config.public.strapi.url}${config.public.strapi.prefix}/happenings?fields=${fields}&${populate}&sort=${sort}&${limitFeatured}&${filterDate}&${filterFeatured}`
  )
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
        :srcset="`${config.public.strapi.url}
          ${featured.data[0].attributes.image.data.attributes.formats.small.url}
        `"
        media="(max-width: 360px)"
      />
      <source
        :srcset="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.medium.url}`"
        media="(max-width: 1200px)"
      />
      <source
        :srcset="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.large.url}`"
      />
      <img
        :src="`${config.public.strapi.url}${featured.data[0].attributes.image.data.attributes.formats.small.url}`"
        :alt="featured.data[0].attributes.name"
      />
    </picture>
  </div>
</template>

<style scoped></style>
