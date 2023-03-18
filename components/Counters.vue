<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Counters from '../types/CountersSection'
  import { useIntervalFn, useElementVisibility } from '@vueuse/core'

  const target = ref(null)
  const targetIsVisible = useElementVisibility(target)

  const client = useStrapiClient()
  let counters = {} as StrapiResponse<Counters>
  try {
    counters = await client<StrapiResponse<Counters>>('/counter-section', {
      params: { populate: '*' },
    })
  } catch (error) {
    console.error(error)
  }

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
      v-for="counter in counters.data.attributes.Counter.sort((a, b) =>
        a.Number > b.Number ? 1 : -1
      )"
      :key="counter.id"
    >
      <ClientOnly>
        <font-awesome-icon :icon="counter.Fontawesome_icon" />
      </ClientOnly>
      <div>
        <h3>
          {{
            Intl.NumberFormat('hu-HU', {
              style: 'decimal',
              maximumFractionDigits: 0,
            }).format(counter.Number * (countUp / 100))
          }}
        </h3>
        <small>{{ counter.Title }}</small>
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
