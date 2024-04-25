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
    <p>Csodálatos! Nézze meg az egyik elvonulásunkat egy teljes, spirituális témákkal teli hétvégére</p>
    <span id="cloudBig"></span>
    <span id="cloudSmall"></span>
  </section>
</template>

<style scoped>
  section {
    height: var(--main-height);
    height: var(--main-dynamic-height);
    background-image: url('/images/bg_gradient_cut.png');
    background-size: cover;
    text-align: center;
    position: relative;
    padding: var(--horizontal-scroll-padding-right);
  }
  h1 {
    z-index: 2;
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
    top: 20%;
    left: calc(60% - v-bind(cloudBigPos));
    width: 35%;
    height: 10%;
    background-image: url('/images/cloud-big.png');
  }
  #cloudSmall {
    top: 25%;
    left: calc(30% + v-bind(cloudSmallPos));
    width: 17.5%;
    height: 2.5%;
    background-image: url('/images/cloud-small.png');
  }

  @media screen and (min-width: 64rem) {
    section {
      background-image: url('/images/background-desktop.png');
      display: flex;
      flex-direction: column;
      gap: 3em;
    }
    #cloudBig {
      --width: 16rem;
      width: var(--width);
      height: calc(var(--width) / 1.91);
    }
    #cloudSmall {
      --width: 6rem;
      width: var(--width);
      height: calc(var(--width) / 3.75);
    }
  }
</style>
