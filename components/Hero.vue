<script setup lang="ts">
const { x, y } = useWindowScroll()
const cloudBigPos = computed(() => `${y.value / 20}%`)
const cloudSmallPos = computed(() => `${y.value / 20}%`)
</script>

<template>
  <section id="hero">
    <h1>Felejthetetlen élmény</h1>
    <p>
      Vegyél részt egyik elvonulásunkon egy teljes, spirituális témákkal teli
      hétvégén!
    </p>
    <span id="cloudBig"/>
    <span id="cloudSmall"/>

    <Services />
  </section>
</template>

<style scoped>
#hero {
  height: var(--main-height);
  height: var(--main-dynamic-height);
  background-image: url("/images/background-mobile.png");
  background-size: cover;
  text-align: center;
  position: relative;
  padding: var(--horizontal-scroll-padding-right);
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
h1 {
  position: relative;
  z-index: 2;
  margin: 0.5em;
}
p {
  position: relative;
  z-index: 2;
  max-width: 40rem;
  margin: 0 auto;
}
#cloudBig,
#cloudSmall {
  background-size: cover;
  z-index: 1;
  position: absolute;
}
#cloudBig {
  top: 23vh;
  right: calc(1em + v-bind(cloudBigPos));
  --width: 8rem;
  width: var(--width);
  height: calc(var(--width) / 1.91);
  background-image: url("/images/cloud-big.png");
}
#cloudSmall {
  top: 27vh;
  left: calc(2em + v-bind(cloudSmallPos));
  --width: 4rem;
  width: var(--width);
  height: calc(var(--width) / 3.75);
  background-image: url("/images/cloud-small.png");
}

@media screen and (min-width: 41rem) {
  #hero {
    background-image: url("/images/background-desktop.png");
    gap: 3em;
  }
  h1 {
    margin-top: 16em;
  }
  #cloudBig {
    --width: 19rem;
    top: 10vh;
    right: calc(12em + v-bind(cloudBigPos));
  }
  #cloudSmall {
    --width: 12rem;
    top: 15vh;
    left: calc(12em + v-bind(cloudSmallPos));
    width: var(--width);
    height: calc(var(--width) / 3.75);
  }
}
</style>
