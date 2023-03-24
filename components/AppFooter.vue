<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Footer from '../types/Footer'

  const client = useStrapiClient()
  let footer = {} as StrapiResponse<Footer>
  try {
    footer = await client<StrapiResponse<Footer>>('/footer', {
      params: { populate: '*' },
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
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--light);
  }
</style>
