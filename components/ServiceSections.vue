<script setup lang="ts">
  import { ref } from 'vue'
  import Service from '~~/types/Service'

  const props = defineProps<{
    services: Service[]
  }>()

  const serviceSectionsElement = ref(null as unknown as HTMLElement)
  const serviceSectionsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    serviceSectionsViews.value[num] = isVisible
  }
</script>

<template>
  <div class="touch-right">
    <ul ref="serviceSectionsElement" class="horizontal-scroll">
      <li v-for="(service, i) in props.services">
        <ServiceSectionBox
          v-if="serviceSectionsElement"
          :service="service"
          :num="i"
          :scrollElement="serviceSectionsElement"
          @visibility="visibilityChanged"
        />
      </li>
    </ul>
    <Pager :length="services.length" :visible="serviceSectionsViews" />
  </div>
</template>

<style scoped>
  ul {
    margin-top: 25vh;
  }
  li {
    background-color: #fffc;
  }
</style>
