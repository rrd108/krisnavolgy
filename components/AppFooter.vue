<script setup lang="ts">
  import { Footer } from 'types/Footer'
  import StrapiResponse from '../types/StrapiResponse'

  const client = useStrapiClient()
  let footer = {} as StrapiResponse<Footer>
  try {
    footer = await client<StrapiResponse<Footer>>('/footer', {
      params: { populate: 'deep' },
    })
  } catch (error) {
    console.error(error)
  }
</script>

<template>
  <footer>
    <FooterBlock :data="footer.data.attributes.opening_hours" />
    <FooterBlock :data="footer.data.attributes.contact" />
    <FooterBlock :data="footer.data.attributes.website_navigation" />
    <SocialMedia :socialMedia="footer.data.attributes.social_media_section" />
    <SubscribeForm :subscribe="footer.data.attributes.subscribe" />
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--light);
    padding: 1em;
  }

  :deep(h3) {
    margin-top: 2em;
  }
  :deep(hr) {
    border-bottom: thin solid var(--light);
    width: 50vw;
    margin: 0.75em 0;
  }
</style>
../types/StrapiResponse
