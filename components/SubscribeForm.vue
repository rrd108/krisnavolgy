<script setup lang="ts">
  const email = ref('')
  const addUser = () => {
    alert('TODO')
  }
</script>

<template>
  <section>
    <h2>Ne hagyd ki!</h2>
    <p>Legyél az elsők között akik értesülnek azesményekről, kedvezményekről és más nagyszerű dolgokról.</p>
    <input type="email" v-model="email" placeholder="Email" />
    <button @click="addUser">Feliratkozom</button>
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
