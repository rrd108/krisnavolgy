<script setup lang="ts">
</script>

<template>
  <h1><Icon name="material-symbols:tips-and-updates-outline-rounded" /> Programok</h1>

  <ul>
    <li v-for="event in allComingEvents">
        <FormKit type="form">
            <FormKit type="text" name="title" label="Cím" :value="event.title" />
            <FormKit type="date" name="start_date" label="Kezdés" :value="event.start_date" />
            <FormKit type="date" name="end_date" label="Befejezés" :value="event.end_date" />
            <FormKit type="textarea" name="description" label="Leírás" :value="event.description" />
            <FormKit type="textarea" name="long_description" label="Leírás" :value="event.long_description" />
            <FormKit type="url" name="url" label="URL" :value="event.url" />
            <FormKit type="text" name="thumbnail" label="Kép" :value="event.thumbnail" />
        </FormKit>
        <Divider />
    </li>
  </ul>
</template>

<style scoped>
</style>