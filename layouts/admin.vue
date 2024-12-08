<script setup lang="ts">
  const userStore = useUserStore()
</script>
<template>
  <div>
    <nav v-if="userStore.token">
      <ul>
        <li>
          <NuxtLink to="/admin/festivals">
            <Icon name="material-symbols:tips-and-updates-outline-rounded" />
            Programok
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/gift-cards">
            <Icon name="material-symbols:featured-seasonal-and-gifts" />
            Ajándékutalványok
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/upload">
            <Icon name="material-symbols:upload" />
            Feltöltés
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/gallery">
            <Icon name="jam:pictures" />
            Galéria
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
  nav {
    background-color: var(--light);
    padding: 1em;
    min-height: 100dvh;
  }
  li {
    margin: 1em 0;
  }
  main {
    flex: 1;
  }
</style>
