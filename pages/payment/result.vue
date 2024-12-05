<script setup lang="ts">
const {r,s} = useRoute().query
const data = await $fetch('/api/simplepay/result', {method: 'POST', body: {r,s}})
</script>

<template>
    <h1> TODO Result</h1>
    <InfoBlock>
        <p v-if="data.event == 'SUCCESS'">Sikeres fizetés</p>
        <p v-else>Sikertelen fizetés</p>
    </InfoBlock>
    <small>
        {{ data }}
    </small>
</template>

<style scoped>
</style>
