<script setup>
  useHead({
    title: 'Nyitvatartás'
  })
</script>

<template>
  <h1>
    <Icon name="material-symbols:alarm-outline" />
    Nyitvatartás
  </h1>

  <OpenHours />

  <Divider />

  <h3>Érdekelhet még</h3>
  <ul>
    <li>
      <NuxtLink to="/belepojegy">Belepőjegy</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/csoportok">Csoportoknak szóló ajánlataink</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/programok">Programjaink</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
