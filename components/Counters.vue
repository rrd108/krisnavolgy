<script setup lang="ts">
import { useIntervalFn, useElementVisibility } from "@vueuse/core"

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const countUp = ref(1)
useIntervalFn(() => {
  if (countUp.value > 100) return
  if (targetIsVisible.value) {
    countUp.value++
  }
}, 20)

const counters = [
  { title: "Program évente", number: 47, icon: "child-reaching" },
  { title: "Vendégéjszaka", number: 986, icon: "bed" },
  { title: "Látogató évente", number: 27600, icon: "people-group" },
  { title: "Finom ebéd", number: 12400, icon: "utensils" },
]
</script>

<template>
  <ul ref="target">
    <li v-for="counter in counters" :key="counter.title">
      <!--font-awesome :icon="counter.icon" /-->
      <div>
        <h3>
          {{
            Intl.NumberFormat("hu-HU", {
              style: "decimal",
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
  padding: var(--main-padding);
}
li {
  display: flex;
  align-items: center;
  gap: 1em;
}

@media screen and (min-width: 64rem) {
  ul {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
}
</style>
