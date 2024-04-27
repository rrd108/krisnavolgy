<script setup lang="ts"></script>

<template>
  <div>
    <ClientOnly>
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/YXf5TI_SWG4?si=E23WSxPJYCMitDCo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </ClientOnly>
  </div>
</template>

<style scoped>
  div {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  div::after {
    display: block;
    content: '';
    padding-top: 56.25%; /*16:9 aspect ratio*/
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
