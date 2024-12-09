<script setup lang="ts">
  const userStore = useUserStore()
  const isNavOpen = ref(true)
</script>
<template>
  <div>
    <nav v-if="userStore.token" :class="{ closed: !isNavOpen }">
      <Icon
        id="navToggle"
        :name="
          isNavOpen ? 'material-symbols:arrow-circle-left' : 'material-symbols:arrow-circle-right'
        "
        @click="isNavOpen = !isNavOpen"
      />
      <ul>
        <li>
          <NuxtLink to="/admin/festivals" title="Programok">
            <Icon name="material-symbols:tips-and-updates-outline-rounded" />
            <span class="navText">Programok</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/gift-cards" title="Ajándékutalvány">
            <Icon name="material-symbols:featured-seasonal-and-gifts" />
            <span class="navText">Ajándékutalvány</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/upload" title="Feltöltés">
            <Icon name="material-symbols:upload" />
            <span class="navText">Feltöltés</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/gallery" title="Galéria">
            <Icon name="jam:pictures" />
            <span class="navText">Galéria</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    gap: 1em;
  }
  #navToggle {
    font-size: 3em;
  }
  nav {
    width: 12em;
    background-color: var(--light);
    padding: 1em;
    min-height: 100dvh;
    transition: all 300ms ease-in-out;
  }
  li {
    margin: 1em 0;
    white-space: nowrap;
  }
  li a {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  nav.closed {
    width: 3em;
  }
  nav.closed .navText {
    display: none;
  }
  a span:first-child {
    font-size: 1.5em;
  }
  main {
    flex: 1;
  }
</style>
