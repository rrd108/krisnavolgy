<script setup lang="ts">
const sendOrder = async () => {
    const { data, status, error } = await useFetch('/api/simplepay/order')
    console.log(data.value)
    if (data.value.paymentUrl) {
        navigateTo(data.value.paymentUrl, {external: true})
    }
}
</script>

<template>
    <h1>Order</h1>
    <button @click="sendOrder">Megrendelés</button>
</template>

<style scoped>
</style>