<script setup lang="ts">
const menus = [
  //{ label: "Látogatás", path: "/latogatas" },
  //    { label: 'Programok', path: '/programok' },
  { label: "Szállás", path: "https://vendeghaz.krisnavolgy.hu" },
  //    { label: 'Étterem', path: '/etterem' },
  { label: "Webshop", path: "https://bolt.krisnavolgy.hu" },
  //{ label: "Házirend", path: "/hazirend" },
  //{ label: "Útvonal", path: "/utvonal" },
  //{ label: "Rólunk", path: "/rolunk" },
  //    { label: 'Kapcsolat', path: '/kapcsolat' },
];

const isMobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <nav>
      <font-awesome
        icon="ellipsis-vertical"
        id="mobileMenu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      />
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
    z-index: 3;
  }
  header {
    padding: 0.25em;
    align-items: flex-start;
  }
  ul {
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5em 3em 0.5em 1em;
    transform: translateY(-100%) scale(0);
    transform-origin: calc(100% - 1.25em) 6.5em;
    transition: transform 350ms ease-in-out;
    background-color: pink;
    position: fixed;
    right: 0;
    z-index: 2;
  }
  ul.open {
    transform: translateY(0) scale(1);
  }
}
</style>
