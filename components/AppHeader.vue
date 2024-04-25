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
  header {
    height: var(--header-height);
    height: var(--header-dynamic-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1em solid var(--divider-color);
  }
  img {
    height: calc(100% - 2 * 0.5em);
    margin: 0.5em;
  }
  ul {
    display: flex;
    gap: 1em;
  }

  @media screen and (min-width: 64rem) {
    header {
      padding: 1em;
      font-weight: bold;
    }
    img {
      height: 2rem;
    }
  }
</style>
