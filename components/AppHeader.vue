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

  const isMobileMenuOpen = ref(false)
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <nav>
      <font-awesome icon="ellipsis-vertical" id="mobileMenu" @click="isMobileMenuOpen = !isMobileMenuOpen" />
      <ul :class="{ open: isMobileMenuOpen }">
        <li v-for="menu in menus">
          <NuxtLink :to="menu.path">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  #mobileMenu {
    display: none;
  }
  header {
    height: var(--header-height);
    height: var(--header-dynamic-height);
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
  ul {
    display: flex;
    gap: 1em;
  }

  @media screen and (max-width: 40rem) {
    #mobileMenu {
      display: block;
      position: fixed;
      top: 1em;
      right: 1em;
      z-index: 1;
    }
    header {
      padding: 0.25em;
      align-items: flex-start;
      overflow-x: hidden;
    }
    ul {
      flex-direction: column;
      gap: 0.5em;
      margin-top: calc(var(--header-dynamic-height) - 0.25em);
      margin-top: calc(var(--header-height) - 0.25em);
      transform: translateX(10em);
      transition: transform 350ms ease-in-out;
      background-color: pink;
      padding: 0.5em 2em 0.5em 1em;
      position: fixed;
      right: 0;
      z-index: 2;
    }
    ul.open {
      transform: translateX(0);
    }
  }
</style>
