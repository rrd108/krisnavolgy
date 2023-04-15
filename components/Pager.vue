<script setup lang="ts">
  import { PropType } from 'vue'

  const props = defineProps({
    color: {
      type: String,
      default: '#fff',
    },
    length: {
      type: Number,
      required: true,
    },
    visible: {
      type: Array as PropType<boolean[]>,
      required: true,
    },
  })
</script>

<template>
  <ul>
    <li v-for="i in length - 1" :class="{ active: visible[i] }"></li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    margin: 1em 1em 1em 0;
    gap: 0.5em;
    justify-content: center;
  }
  li {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: v-bind(color);
    opacity: 0.25;
    transition: opacity 350ms ease-in-out;
  }
  li.active {
    opacity: 1;
  }
</style>
