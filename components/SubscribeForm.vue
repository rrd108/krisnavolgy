<script setup lang="ts">
  const email = ref('')
  const addUser = () => {
    alert('TODO')
  }
</script>

<template>
  <section>
    <h2>Ne hagyd ki!</h2>
    <p>Legyél az elsők között akik értesülnek az esményekről, kedvezményekről és más nagyszerű dolgokról.</p>
    <input v-model="email" type="email" placeholder="Email" >
    <button @click="addUser">Feliratkozom</button>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
    padding: 2.5em var(--main-padding);
  }
  h2,
  p {
    margin-bottom: 1em;
  }
  input {
    border: thin solid var(--light);
    border-radius: 1em 0 0 1em;
  }
  button {
    background-color: var(--dark);
    color: #fff;
    border: none;
    padding: 0.6rem;
    border-radius: 0 1em 1em 0;
  }
</style>
