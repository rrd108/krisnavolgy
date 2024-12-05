<script setup lang="ts">
const {r,s} = useRoute().query
const data = await $fetch('/api/payment/result', {method: 'POST', body: {r,s}})
</script>

<template>
    <h1>Result</h1>
    {{ data }}
</template>

<style scoped>
</style>
