<script setup>
const services = [
  {
    title: 'Belépőjegy árak',
    content: 'Diák, nyugdíjas, felnőtt jegyek',
    price: '1.700 Ft - 3.400 Ft',
    link: '/belepojegy',
  },
  {
    title: 'Csoportok',
    content: 'Csoport programok',
    price: '2.300 Ft- 3.300 Ft',
    link: '/csoportok',
  },
  {
    title: 'Szállás',
    content: 'Különböző igényekre igazodó szálláshelyek',
    price: '6.110 Ft - 25.300 Ft',
    link: 'https://vendeghaz.krisnavolgy.hu',
  },
  {
    title: 'Étterem',
    content: 'Indiai ételkülönlegességek',
    price: '9 Ft - 99.9999 Ft',
    link: '/etterem',
  },
  {
    title: 'Webshop',
    content: 'India kincsei',
    price: 'Árak a webshopban',
    link: 'https://bolt.krisnavolgy.hu',
  },
  {
    title: 'Elvonulások',
    content: 'Hosszú hétvégék feltöltődésre',
    price: '9 Ft - 999.999 Ft',
    link: 'https://elvonulas.krisnavolgy.hu',
  },
]
const { isMobile } = useDevice()
</script>

<template>
  <div id="services">
    <Carousel
      :items-to-show="isMobile ? 1.2 : 4.5"
      snap-align="start"
      :autoplay="2500"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
    >
      <Slide v-for="(service, i) in services" :key="service.title">
        <ServiceBox :service="service" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
@media screen and (max-width: 40rem) {
  #services {
    margin: 1em -1em 0 0 ;
  }
}
</style>
