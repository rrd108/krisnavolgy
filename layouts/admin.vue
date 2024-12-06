<script setup lang="ts">
  const userStore = useUserStore()
</script>
<template>
  <header>
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
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<style scoped>
  header {
    padding: 0.5em;
  }
  ul {
    display: flex;
    gap: 1em;
  }
</style>
