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
  <div>
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

    <ul id="pager">
      <li
        v-for="i in serviceSection.data?.attributes.service_category_box.length"
        :class="{ active: serviceSectionsViews[i - 1] }"
      ></li>
    </ul>
  </div>
</template>

<style scoped>
  div {
    margin-right: -1em;
  }
  ul {
    display: flex;
  }
  #serviceSections {
    gap: 1em;
    margin-top: 35vh;
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

  #pager {
    margin: 1em 1em 1em 0;
    gap: 0.5em;
    justify-content: center;
  }
  #pager li {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    transition: background-color 350ms ease-in-out;
  }
  #pager li.active {
    background-color: #fff;
  }
</style>
