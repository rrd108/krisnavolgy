<script setup lang="ts">
  import Hero from '../types/Hero'
  import StrapiResponse from '../types/StrapiResponse'
  import { useWindowScroll } from '@vueuse/core'

  const { x, y } = useWindowScroll()
  const client = useStrapiClient()
  const hero = await client<StrapiResponse<Hero>>('/hero-section', {
    params: { populate: '*' },
  })

  const config = useRuntimeConfig()
  const urlBg = `url("${config.public.strapi.url}/uploads/bg_gradient_cut.png")`
  const urlCloudBig = `url("${config.public.strapi.url}/uploads/cloud-big.png")`
  const urlCloudSmall = `url("${config.public.strapi.url}/uploads/cloud-small.png")`

  const cloudBigPos = computed(() => `${y.value / 20}%`)
  const cloudSmallPos = computed(() => `${y.value / 20}%`)
</script>

<template>
  <section>
    <h1>{{ hero.data.attributes.Hero_text.Title }}</h1>
    <p>{{ hero.data.attributes.Hero_text.Content }}</p>
    <ServiceSections />
  </section>
  <span id="cloudBig"></span>
  <span id="cloudSmall"></span>
  <span id="sky"></span>
</template>

<style scoped>
  section {
    height: var(--main-height);
    height: var(--main-dynamic-height);
    background-image: v-bind(urlBg);
    background-size: cover;
    text-align: center;
    position: relative;
    padding: var(--hero-padding-right);
  }
  #cloudBig,
  #cloudSmall {
    position: absolute;
    background-size: cover;
    z-index: 1;
  }
  #cloudBig {
    top: 40%;
    left: calc(60% - v-bind(cloudBigPos));
    width: 35%;
    height: 10%;
    background-image: v-bind(urlCloudBig);
  }
  #cloudSmall {
    top: 45%;
    left: calc(10% + v-bind(cloudSmallPos));
    width: 17.5%;
    height: 2.5%;
    background-image: v-bind(urlCloudSmall);
  }
</style>
