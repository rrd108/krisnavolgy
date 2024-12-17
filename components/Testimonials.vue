<script setup lang="ts">
  const { isMobile } = useDevice()

  const testimonials = [
    {
      name: 'Orbán Csilla',
      text: 'Nagyon elégedettek voltunk mindennel, az első naptól az utolsó percig nagyon élveztük a Krisna völgyben töltött időt. Szinte új emberként tértünk haza, és másnap még visszavágytunk, nehezen sikerült a visszailleszkedés a mindennapokba. Köszönjük az élményt!'
    },
    {
      name: 'Palyovné Jevtuhov Boglárka',
      text: 'Hálás vagyok a lehetőségért, a sok mindenért, amit tanulhattam. A vendégvezetők is fantasztikusak voltak! Amikor ott voltam még nem is ismertem fel, milyen nagy változás indult el bennem. Még mindig a hatása alatt vagyok. Hálásan köszönöm! '
    },
    {
      name: 'Veronika',
      text: 'Nagyon tetszettek a vezetett túrák és hogy ezáltal lehetőségünk volt beszélgetni a völgyben élőkkel, illetve tanulni tőlük. Az étel nagyon finom volt. Ezeken kívül még alapvetően az az energia és béke tetszett, (még a tömeg ellenére is) amit ott tapasztaltunk :) '
    },
    {
      name: 'T. Luca',
      text: 'Mély benyomást tett rám a hívők közvetlen, segítőkész szándéka, az ételek minősége, a Kirtan zenék, óriási tehetség és összhang kell hozzá, illetve a karkötőkészítés és annak felajánlása.'
    }
  ]
</script>

<template>
  <section>
    <h2>Rólunk mondták</h2>
    <Carousel
      :items-to-show="isMobile ? 1.2 : 3"
      snap-align="start"
      :autoplay="4000"
      :pause-autoplay-on-hover="true"
      :wrap-around="true"
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
    margin: 0.5em 0.5em 0.5em 0.5em;
    padding-top: 1em;
  }

  @media screen and (min-width: 42rem) {
    section {
      padding-bottom: 1em;
    }
  }
</style>
