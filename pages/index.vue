<script setup lang="ts">
  import HomePage from '~~/types/HomePage'
  import StrapiResponse from '~~/types/StrapiResponse'

  const client = useStrapiClient()
  let response = {} as StrapiResponse<HomePage>
  try {
    response = await client<StrapiResponse<HomePage>>('/home-page', {
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
    <CounterSection :counters="homePage.counter_section" />
    <!--EventSection :happenings="homePage.events" /-->
    <OnSaleSection />
    <br />
    Mi Krisna-völgy
    <br />
    Rólunk mondták
    <br />
    Térkép
  </div>
</template>

<style scoped></style>
