<script setup lang="ts">
  import Hero from '../types/Hero'
  import StrapiResponse from '../types/StrapiResponse'
  import { useWindowScroll } from '@vueuse/core'

  const { x, y } = useWindowScroll()
  const client = useStrapiClient()

  const hasBackendFetchError = ref(false)
  let hero = {} as StrapiResponse<Hero>
  try {
    hero = await client<StrapiResponse<Hero>>('/hero-section', {
      params: { populate: '*' },
    })
  } catch (error) {
    console.error(error)
    hasBackendFetchError.value = true
  }

  const cloudBigPos = computed(() => `${y.value / 20}%`)
  const cloudSmallPos = computed(() => `${y.value / 20}%`)
</script>

<template>
  <section>
    <picture>
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>
    <h1 v-if="hasBackendFetchError">
      Váratlan hiba történt az adatok lekérése során. Kérjük gyere vissza később
    </h1>
    <h1>{{ hero.data?.attributes.Hero_text.title }}</h1>
    <p>{{ hero.data?.attributes.Hero_text.content }}</p>
    <ServiceSections />
  </section>
  <span id="cloudBig"></span>
  <span id="cloudSmall"></span>
</template>

<style scoped>
  section {
    height: var(--main-height);
    height: var(--main-dynamic-height);
    background-image: url('/images/bg_gradient_cut.png');
    background-size: cover;
    text-align: center;
    position: relative;
    padding: var(--hero-padding-right);
  }
  p {
    position: relative;
    z-index: 2;
  }
  #cloudBig,
  #cloudSmall {
    background-size: cover;
    z-index: 1;
    position: absolute;
  }
  #cloudBig {
    top: 27%;
    left: calc(60% - v-bind(cloudBigPos));
    width: 35%;
    height: 10%;
    background-image: url('/images/cloud-big.png');
  }
  #cloudSmall {
    top: 30%;
    left: calc(10% + v-bind(cloudSmallPos));
    width: 17.5%;
    height: 2.5%;
    background-image: url('/images/cloud-small.png');
  }
</style>
