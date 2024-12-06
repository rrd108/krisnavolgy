<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

const userStore = useUserStore()

const error = ref('')

const login = async (data: { email: string; password: string }) => {
  try {
    await userStore.login(data)
  } catch (err) {
    error.value = err.message
  }
}
</script>

<template>
  <h1><Icon name="eos-icons:admin-outlined" /> Krisna-völgy Admin</h1>

  <h3 v-if="error">{{ error }}</h3>

  <FormKit
    type="form"
    submit-label="Uccu neki!"
    @submit="login"
  >
    <FormKit type="email" name="email" label="Email" outer-class="breath" />
    <FormKit type="password" name="password" label="Password" outer-class="breath" />
  </FormKit>
</template>

<style scoped>
h3 {
  background-color: var(--error);
  color: var(--light);
  padding: 1em;
  border-radius: .5em;
}
.breath {
  margin: 1em 0;
}
</style>
