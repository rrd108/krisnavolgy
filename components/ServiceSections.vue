<script setup lang="ts">
  import { ref } from 'vue'
  import StrapiResponse from '../types/StrapiResponse'
  import ServiceSection from '../types/ServiceSection'

  const client = useStrapiClient()
  let serviceSection = {} as StrapiResponse<ServiceSection>
  try {
    serviceSection = await client<StrapiResponse<ServiceSection>>(
      '/service-section',
      {
        params: { populate: '*' },
      }
    )
  } catch (error) {
    console.error(error)
  }

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
      <li
        v-for="(service, i) in serviceSection.data?.attributes
          .service_category_box"
      >
        <ServiceSectionBox
          v-if="serviceSectionsElement"
          :service="service"
          :num="i"
          :scrollElement="serviceSectionsElement"
          @visibility="visibilityChanged"
        />
      </li>
    </ul>
    <Pager
      :length="serviceSection.data?.attributes.service_category_box.length"
      :visible="serviceSectionsViews"
    />
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
