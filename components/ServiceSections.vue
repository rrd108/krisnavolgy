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
  <div class="touch-right" v-if="!$device.isDesktop">
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

  <div v-if="$device.isDesktop">
    <Carousel
      :scrollPerPage="false"
      :perPage="4"
      :autoplay="true"
      :loop="true"
      :speed="750"
      :paginationActiveColor="'#ffffff'"
      :paginationColor="'#bfbfbf'"
    >
      <ul ref="serviceSectionsElement" class="horizontal-scroll">
        <li v-for="(service, i) in props.services">
          <Slide>
            <ServiceSectionBox
              v-if="serviceSectionsElement"
              :service="service"
              :num="i"
              :scrollElement="serviceSectionsElement"
              @visibility="visibilityChanged"
            />
          </Slide>
        </li>
      </ul>
    </Carousel>
  </div>
</template>

<style scoped>
  ul.horizontal-scroll {
    margin-top: 25vh;
  }
  li {
    background-color: #fffc;
  }
</style>

<style scoped>
  @media screen and (min-width: 64rem) {
    ul.horizontal-scroll {
      margin-top: calc(var(--main-dynamic-height)-4em);
    }
    li {
      width: 23%;
      margin-inline: 0.5em;
    }
  }
</style>
