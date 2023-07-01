<script setup lang="ts">
  import StrapiSingleResponse from '~~/types/StrapiSingleResponse'
  import SubscribeForm from '~~/types/SubscribeForm'

  const client = useStrapiClient()
  let response = {} as StrapiSingleResponse<SubscribeForm>
  try {
    response = await client<StrapiSingleResponse<SubscribeForm>>(
      '/subsribes/1',
      {
        params: { populate: 'deep' },
      }
    )
  } catch (error) {
    console.error(error)
  }

  const email = ref('')
  const addUser = () => {
    // TODO
    console.log(email.value)
  }

  const subscribe = response.attributes.subscribe as SubscribeForm
</script>

<template>
  <section>
    <h2>{{ subscribe.title }}</h2>
    <p>{{ subscribe.call_to_action }}</p>
    <input
      type="email"
      v-model="email"
      :placeholder="subscribe.email_entry_field"
    />
    <button @click="addUser">
      {{ subscribe.subscribe_button.button_text }}
    </button>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
    padding: 2.5em 0;
  }
  h2,
  p {
    margin-bottom: 1em;
  }
  input {
    border: thin solid var(--light);
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
  button {
    background-color: var(--dark);
    color: #fff;
    border: none;
    padding: 0.6rem;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
  }
</style>
