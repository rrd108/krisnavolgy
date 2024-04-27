<script setup lang="ts"></script>

<template>
  <div class="youtube-video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/YXf5TI_SWG4?si=E23WSxPJYCMitDCo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
  .youtube-video-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .youtube-video-container::after {
    display: block;
    content: '';
    padding-top: 56.25%; /*16:9 aspect ratio*/
  }

  .youtube-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mediumMedia {
    max-width: 50%;
  }
</style>
