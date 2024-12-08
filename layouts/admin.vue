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
    height: 100dvh;
  }
</style>
