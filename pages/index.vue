<script setup lang="ts">
  import HomePage from 'types/HomePage'
  import StrapiSingleResponse from 'types/StrapiSingleResponse'

  const client = useStrapiClient()
  let response = {} as StrapiSingleResponse<HomePage>
  try {
    response = await client<StrapiSingleResponse<HomePage>>('/home-page', {
      params: { populate: 'deep' },
    })
  } catch (error) {
    console.error(error)
  }

  const homePage = response.data.attributes as HomePage
</script>

<template>
  <div>
    <HeroSection
      :hero="homePage.hero_section"
      :services="homePage.services_section"
    />
    <SubscribeForm :subscribe="homePage.subscribe.data.attributes.subscribe" />
    <CounterSection :counters="homePage.counter_section" />
    <!--HappeningsSection :happenings="homePage.event_section" /-->
    <OnSaleSection />
    <br />
    Mi Krisna-völgy
    <br />
    <ReviewsSection :reviews="homePage.reviews" />
    Térkép
  </div>
</template>

<style scoped></style>
