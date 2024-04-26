<script setup>
  const services = [
    { title: 'Belépőjegy árak', content: 'Diák, nyugdíjas, felnőtt jegyek', price: '2.000 - 10.000 Ft' },
    { title: 'Csoportok', content: 'Csoport programok', price: 'Kérj ajánlatot' },
    { title: 'Szállás', content: 'Különböző igényekre igazodó szálláshelyek', price: '3.400 Ft - 38.000 Ft' },
    { title: 'Étterem', content: 'Indiai ételkülönlegességek', price: '2.690 Ft - 5.490 Ft' },
    { title: 'Webshop', content: 'India kincsei', price: 'Árak a webshopban' },
    { title: 'Elvonulások', content: 'Hosszú hétvégék feltöltődésre', price: '55.000 - 125.000' },
  ]

  // https://ismail9k.github.io/vue3-carousel/getting-started.html
</script>

<template>
  <Carousel :itemsToShow="4.5" snapAlign="start" :autoplay="2500" :pauseAutoplayOnHover="true" :wrapAround="true">
    <Slide v-for="(service, i) in services" :key="service.title">
      <ServiceBox :service="service" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped></style>
