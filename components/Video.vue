<script setup lang="ts">
	const props = defineProps<{
	video_link: string
	}>()
</script>

<template>
    <div class="youtube-video-container">
    <iframe
	width="560"
	height="315"
	:src="props.video_link"
	allowfullscreen
	frameborder="0"
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
  content: "";
  padding-top: 56.25%; /*16:9 aspect ratio*/
}

.youtube-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
