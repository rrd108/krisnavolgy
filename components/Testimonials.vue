<script setup lang="ts">
  const { isMobile } = useDevice()

  const testimonials = [
    {
      name: 'Szőke Jánosné',
      text: 'Minden nagyon csodálatos. A Krisnások mindegyike roppant kedves,vendégszerető ember! Ajanlani tudom mindenkinek ezt a nyugalom szigetét. Köszönjük,hogy ismét eljuthattunk erre a csodálatos helyre!',
    },
    {
      name: 'Bakos Judit',
      text: 'Ajánlom az egész völgy-farm különleges látnivalóit. Egy nagyon szép napot töltöttünk itt el a családdal, unokákkal. Részt vettünk a játékokban, finom italokat, ételeket fogyasztottunk.',
    },
    { name: 'Aladár', text: 'Finom a kaja' },
    { name: 'Pepe', text: 'Cool, de tényleg' },
  ]
</script>

<template>
  <section>
    <h2>Rólunk mondták</h2>
    <Carousel
      :itemsToShow="isMobile ? 1.2 : 3"
      snapAlign="start"
      :autoplay="4000"
      :pauseAutoplayOnHover="true"
      :wrapAround="true"
    >
      <Slide v-for="(testimonial, i) in testimonials" :key="testimonial.name">
        <TestimonialBox :testimonial="testimonial" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
  }
  h2 {
    margin: 1em;
  }
</style>
