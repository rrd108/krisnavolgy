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
    <HeroSection :data="homePage.hero_section" />
  </div>
</template>

<style scoped></style>
