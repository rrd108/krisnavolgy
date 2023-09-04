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
