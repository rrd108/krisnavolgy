<script setup></script>

<template>
  <div>
    <Icon name="material-symbols:lightbulb" />
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: var(--divider-color);
  padding: 0.5em;
  border-radius: 0.5em;
}
span {
  font-size: 4rem;
  color: var(--lighter-dark);
}
</style>
