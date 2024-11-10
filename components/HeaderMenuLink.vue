<script setup lang="ts">
import type { MenuItem } from "@/types/MenuItem"

defineProps({
  menu: {
    type: Object as () => MenuItem,
    required: true,
  },
})
</script>

<template>
  <div>
    <NuxtLink v-if="menu.path" :to="menu.path">
      <Icon :name="menu.icon" />
      {{ menu.label }}
    </NuxtLink>

    <Icon v-if="menu.children" :name="menu.icon" />
    <span v-if="menu.children">
      {{ menu.label }}
    </span>
  </div>
</template>

<style scoped>
div,
div a {
  color: var(--light);
  display: flex;
  align-items: center;
  gap: 0.75em;
}
</style>
