<script setup lang="ts">
  import HomePage from 'types/HomePage'
  import StrapiResponse from 'types/StrapiResponse'

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
    <SubscribeForm :subscribe="homePage.subscribe.data.attributes.subscribe" />
    <CounterSection :counters="homePage.counter_section" />
    <HappeningsSection :happenings_section="homePage.happenings_section" />
    <OnSaleSection />
    <br />
    Mi Krisna-völgy
    <br />
    <div class="youtube-video-container">
    <iframe
	width="560"
	height="315"
	:src="homePage.video_link"
	allowfullscreen
	frameborder="0"
	    ></iframe>
    </div>
    <br />
    <ReviewsSection :reviews_section="homePage.reviews" />
    Térkép
  </div>
</template>

<style scoped></style>
