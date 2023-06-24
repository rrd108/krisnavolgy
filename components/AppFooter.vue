<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Footer from '../types/Footer'

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
    <Subscribe
      :title="footer.data.attributes.Subscribe.Title"
      :content="footer.data.attributes.Subscribe.Text"
      :placeholder="footer.data.attributes.Subscribe_button.Subscribe_field"
      button_text="TODO"
    />
    <OpeningHours :data="footer.data.attributes.Opening_hours" />
    <Contact :data="footer.data.attributes.Availability" />
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
