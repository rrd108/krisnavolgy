<script setup lang="ts">
  const props = defineProps({
    button_text: { type: String, required: true },
    content: { type: String, required: true },
    placeholder: { type: String, required: true },
    title: { type: String, required: true },
  })

  const email = ref('')
  const subscribe = () => {
    // TODO
    console.log(email.value)
  }
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <input type="email" v-model="email" :placeholder="placeholder" />
    <button @click="subscribe">{{ button_text }}</button>
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
