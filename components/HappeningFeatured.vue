<script setup lang="ts">
  import Happening from '../types/Happening'

  const { find } = useStrapi()

  const config = useRuntimeConfig()
  const today = new Date()
  const fields = ['date', 'name', 'description']
  const sort = 'date'
  const pagination = { page: 1, pageSize: 1 }
  const filters = {
    date: { $gte: today.toISOString().substring(0, 10) },
    featured: { $eq: 1 },
  }
  const populate = '*'

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
    <h3>Kiemelt</h3>
    <div class="box">
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
      <h4>{{ featured.data[0].attributes.name }}</h4>
      <small>
        <span><font-awesome-icon icon="fa-solid fa-calendar-days" /></span>
        {{
          new Date(featured.data[0].attributes.date).toLocaleDateString(
            'default',
            { dateStyle: 'long' }
          )
        }}
      </small>
      <small v-show="false">{{
        featured.data[0].attributes.description
      }}</small>
    </div>
  </div>
</template>

<style scoped>
  div {
    background-color: var(--light);
    padding: 0.5em;
    border-radius: 0.5em;
  }
  h3,
  h4 {
    text-align: center;
    margin: 0.25em;
  }
  .box {
    background-color: #fff;
    text-align: center;
    padding: 0.5em;
    border-radius: 0.5em;
  }
  img {
    width: 100%;
  }
  small {
    display: block;
  }
</style>
