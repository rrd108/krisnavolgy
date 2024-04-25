<script setup lang="ts">
  const menus = [
    { label: 'Látogatás', path: '/latogatas' },
    //    { label: 'Programok', path: '/programok' },
    { label: 'Szállás', path: 'https://vendeghaz.krisnavolgy.hu' },
    //    { label: 'Étterem', path: '/etterem' },
    { label: 'Webshop', path: 'https://bolt.krisnavolgy.hu' },
    //    { label: 'Rólunk', path: '/rolunk' },
    //    { label: 'Kapcsolat', path: '/kapcsolat' },
  ]
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <nav>
      <ul>
        <li v-for="menu in menus">
          <NuxtLink :to="menu.path">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  ul {
    display: flex;
    gap: 1em;
  }
  header {
    padding: 1em;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1em solid var(--divider-color);
  }
  img {
    height: 2rem;
  }

  @media screen and (max-width: 35rem) {
    header {
      height: var(--header-height);
      height: var(--header-dynamic-height);
    }
  }
</style>
