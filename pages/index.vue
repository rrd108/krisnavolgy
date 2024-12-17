<script setup lang="ts"></script>

<template>
  <div>
    <TopInfo />
    <Hero />
    <SubscribeForm class="subscribe">
      <h2>Ne hagyd ki!</h2>
      <p>
        Legyél az elsők között aki értesül hírlevelünkből az esményekről, kedvezményekről és más
        nagyszerű dolgokról.
      </p>
    </SubscribeForm>
    <Counters />
    <Festivals />
    <OnSale />
    <Youtube />
    <Testimonials />
  </div>
</template>

<style scoped>
  div {
    margin: -1em;
  }
  .subscribe {
    text-align: center;
    padding: 2.5em var(--main-padding);
  }
</style>
