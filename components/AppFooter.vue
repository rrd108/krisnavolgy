<script setup lang="ts">
  import { Footer } from '../types/Footer'
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
    <div>
      <FooterBlock :data="footer.data.attributes.opening_hours" />
      <FooterBlock :data="footer.data.attributes.contact" />
      <SocialMedia :socialMedia="footer.data.attributes.social_media_section" />
    </div>
    <FooterBlock :data="footer.data.attributes.website_navigation" />
    <div></div>
    <SubscribeForm :subscribe="footer.data.attributes.subscribe" />

    <aside>
      <span>© 2022 Minden jog fenntartva</span>
      <span>Oldaltérkép TODO</span>
      <span>Felhasználási feltételek TODO</span>
    </aside>
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--light);
    padding: 1em;
  }

  :deep(h3) {
    margin-top: 2em;
    border-bottom: 0.1em solid var(--bh-light);
    padding: 0 0 0.5em 0.5em;
  }

  :deep(ul) {
    padding: 0.5em;
  }

  aside {
    border-top: thin solid var(--bh-light);
    padding: 1em;
    font-size: 0.75rem;
  }
  span {
    margin: 0 1em;
  }

  @media screen and (min-width: 64rem) {
    footer {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
    }
    aside {
      grid-column: 1 / span 4;
    }
  }
</style>
