<script setup lang="ts">
  import SubscribeForm from '../types/SubscribeForm'
  import StrapiResponse from '../types/StrapiResponse'

  const client = useStrapiClient()
  let subscribe = {} as StrapiResponse<SubscribeForm>
  try {
    subscribe = await client<StrapiResponse<SubscribeForm>>(
      '/subscribe-section',
      {
        params: { populate: '*' },
      }
    )
  } catch (error) {
    console.error(error)
  }
</script>

<template>
  <div>
    <Hero />
    <Subscribe
      :title="subscribe.data.attributes.Text_box.title"
      :content="subscribe.data.attributes.Text_box.content"
      :placeholder="subscribe.data.attributes.Subscribe_field"
      :button_text="subscribe.data.attributes.Subscribe_button.Title"
    />
    <Counters />
    <EventSection />
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
