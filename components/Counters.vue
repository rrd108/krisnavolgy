<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import NumberFlow from '@number-flow/vue'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const counters = [
  {
    title: 'Program évente',
    number: 42,
    icon: 'material-symbols:tips-and-updates-outline-rounded',
  },
  {
    title: 'Vendégéjszaka',
    number: 3667,
    icon: 'material-symbols:add-home-work-outline',
  },
  { title: 'Látogató évente', number: 27542, icon: 'fa6-solid:people-group' },
  { title: 'Finom ebéd', number: 10162, icon: 'ic:sharp-restaurant-menu' },
]
</script>

<template>
  <ul ref="target">
    <li v-for="counter in counters" :key="counter.title">
      <Icon :name="counter.icon" />
      <div>
        <h3>
          <NumberFlow
            :value="targetIsVisible ? counter.number : 0"
            :format="{
              style: 'decimal',
              maximumFractionDigits: 0,
              useGrouping: true,
            }"
            :transform-timing="{duration: 1750 }"
          />
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
  padding: var(--main-padding);
}
li {
  display: flex;
  align-items: center;
  gap: 1em;
}
h3 {
  margin: 0;
}

@media screen and (min-width: 64rem) {
  ul {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
}
</style>
