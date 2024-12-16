<script setup lang="ts">
  import type { MenuItem } from '@/types/MenuItem'

  defineProps({
    menu: {
      type: Object as () => MenuItem,
      required: true
    }
  })

  const { isMobile } = useDevice()
</script>

<template>
  <div>
    <NuxtLink v-if="menu.path" :to="menu.path">
      <Icon v-if="isMobile" :name="menu.icon" />
      {{ menu.label }}
    </NuxtLink>

    <Icon v-if="menu.children && isMobile" :name="menu.icon" />
    <span v-if="menu.children">
      {{ menu.label }}
    </span>
  </div>
</template>

<style scoped>
  div,
  a {
    color: var(--light);
    display: flex;
    align-items: center;
    gap: 0.75em;
  }

  @media screen and (min-width: 42rem) {
    a {
      color: var(--link-color);
    }
  }
</style>
