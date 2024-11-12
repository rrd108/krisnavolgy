<script setup lang="ts">
const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
const stateChange = (event: YT.OnStateChangeEvent) => {
  isPlaying.value = event.data === 1
}

const videos = ['XuHYvJIeljc', 'Pnyr-BK334w', '0qUtAMTqfmQ']
const videoId = videos[Math.floor(Math.random() * videos.length)]
</script>

<template>
  <section>
    <ScriptYouTubePlayer
      ref="video"
      :video-id="videoId"
      class="center"
      @ready="isLoaded = true"
      @state-change="stateChange"
    >
      <template #awaitingLoad>
        <Icon name="line-md:youtube-filled" />
      </template>
    </ScriptYouTubePlayer>
  </section>
</template>

<style scoped>
span {
  font-size: 8rem;
  color: #f00;
  display: block;
  margin: auto;
  position: absolute;
  inset: 0;
}
</style>
