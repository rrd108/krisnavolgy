<script setup lang="ts">
  const { x, y } = useWindowScroll()
  const cloudBigPos = computed(() => `${y.value / 20}%`)
  const cloudSmallPos = computed(() => `${y.value / 20}%`)
</script>

<template>
  <section>
    <picture>
      <!-- TODO replace with nuxt image -->
      <source media="(max-width: 800px)" srcset="/images/divider.png" />
      <source srcset="/images/divider-desktop.png" />
      <img src="/images/divider.png" />
    </picture>

    <h1>Felejthetetlen élmény</h1>
    <p>Csodálatos! Nézd meg az egyik elvonulásunkat egy teljes, spirituális témákkal teli hétvégére</p>
    <span id="cloudBig"></span>
    <span id="cloudSmall"></span>
  </section>
</template>

<style scoped>
  section {
    height: var(--main-height);
    height: var(--main-dynamic-height);
    background-image: url('/images/background-mobile.png');
    background-size: cover;
    text-align: center;
    position: relative;
    padding: var(--horizontal-scroll-padding-right);
  }
  h1 {
    position: relative;
    z-index: 2;
    margin: 0.5em;
  }
  p {
    position: relative;
    z-index: 2;
    max-width: 35rem;
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
    background-image: url('/images/cloud-big.png');
  }
  #cloudSmall {
    top: 27vh;
    left: calc(2em + v-bind(cloudSmallPos));
    --width: 4rem;
    width: var(--width);
    height: calc(var(--width) / 3.75);
    background-image: url('/images/cloud-small.png');
  }

  @media screen and (min-width: 64rem) {
    section {
      background-image: url('/images/background-desktop.png');
      background-size: cover;
      display: flex;
      flex-direction: column;
      gap: 3em;
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
