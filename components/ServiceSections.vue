<script setup lang="ts">
  import ServiceSection from '../types/ServiceSection'

  const { find } = useStrapi()

  const serviceSections = await find<ServiceSection>('service-sections', {
    populate: '*',
  })
</script>

<template>
  <div>
    <ul>
      <li
        v-for="service in serviceSections.data[0].attributes
          .service_category_box"
      >
        <h3>{{ service.Title }}</h3>
        <p>{{ service.Description }}</p>
        <h6>{{ service.Prices }}</h6>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  div {
    position: relative;
    z-index: 2;
    margin-right: -1em;
  }
  ul {
    margin-top: 2em;
    display: flex;
    gap: 1em;
    overflow-x: scroll;
    scroll-snap-type: inline mandatory;
    scroll-padding: var(--hero-padding-right);
  }
  li {
    background-color: #fff6;
    border-radius: 0.5em;
    padding: 0 0 1em 1em;
    width: 80vw;
    flex-shrink: 0;
    text-align: left;
    scroll-snap-align: start;
  }
  li:last-child {
    margin-right: var(--hero-padding-right);
  }
  h3 {
    margin: 1em 0 2em 0;
  }
  p {
    margin: 1em 0;
  }
</style>
