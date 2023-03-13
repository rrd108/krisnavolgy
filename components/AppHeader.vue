<script setup lang="ts">
  const isOpen = ref(false)
</script>

<template>
  <header>
    <img src="/images/logo.png" alt="logo" />
    <nav>
      <ClientOnly>
        <font-awesome-icon icon="fa-solid fa-bars" @click="isOpen = !isOpen" />
      </ClientOnly>
      <ul :class="{ open: isOpen }">
        <li><NuxtLink to="/">Főoldal</NuxtLink></li>
        <li>Programok</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    height: var(--header-height);
    height: var(--header-dynamic-height);
    display: flex;
    justify-content: space-between;
    background-color: #d9d8c5;
  }
  img {
    height: calc(100% - 2 * 0.5em);
    margin: 0.5em;
  }
  svg {
    margin: 0.75rem;
  }
  nav {
    position: relative;
  }
  ul {
    position: absolute;
    right: -50vw;
    z-index: 1;
    background-color: #fff;
    padding: 0.5em;
    transition: transform 350ms ease-in-out;
  }
  ul.open {
    transform: translateX(-50vw);
  }
</style>
