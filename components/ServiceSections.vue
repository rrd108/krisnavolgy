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
    <ul id="serviceSections" ref="serviceSectionsElement">
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
    display: flex;
  }
  #serviceSections {
    gap: 1em;
    margin-top: 25vh;
    overflow-x: scroll;
    scroll-snap-type: inline mandatory;
    scroll-padding: var(--hero-padding-right);
  }
  li {
    background-color: #fffc;
  }
  #serviceSections li {
    border-radius: 0.5em;
    padding: 0 0 1em 1em;
    width: 72vw;
    flex-shrink: 0;
    text-align: left;
    scroll-snap-align: start;
  }
  #serviceSections li:last-child {
    margin-right: var(--hero-padding-right);
  }
</style>
