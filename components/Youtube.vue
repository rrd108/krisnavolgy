<script setup lang="ts"></script>

<template>
  <div class="video-wrapper">
    <ClientOnly>
      <!--iframe
        src="https://www.youtube.com/embed/YXf5TI_SWG4?si=E23WSxPJYCMitDCo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></!--iframe-->
      TODO
    </ClientOnly>
  </div>
</template>

<style scoped>
.video-wrapper {
  display: flex;
  width: 100%;
}

.video-wrapper iframe {
  flex-grow: 1;
  aspect-ratio: 16/9;
}
</style>
