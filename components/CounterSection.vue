<script setup lang="ts">
  import { useIntervalFn, useElementVisibility } from '@vueuse/core'
  import Counter from '~~/types/Counter'

  const props = defineProps<{
    counters: Counter[]
  }>()

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)

  const countUp = ref(1)
  useIntervalFn(() => {
    if (countUp.value > 100) return
    if (targetIsVisible.value) {
      countUp.value++
    }
  }, 20)
</script>

<template>
  <ul ref="target">
    <li
      v-for="counter in props.counters.sort((a, b) =>
        a.number > b.number ? 1 : -1
      )"
      :key="counter.id"
    >
      <ClientOnly>
        <font-awesome-icon :icon="counter.fontawesome_icon" />
      </ClientOnly>
      <div>
        <h3>
          {{
            Intl.NumberFormat('hu-HU', {
              style: 'decimal',
              maximumFractionDigits: 0,
            }).format(counter.number * (countUp / 100))
          }}
        </h3>
        <small>{{ counter.title }}</small>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    background-color: var(--light);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 1em;
  }
  li {
    display: flex;
    align-items: center;
    gap: 1em;
  }
</style>
