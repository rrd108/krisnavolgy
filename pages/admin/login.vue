<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const error = ref('');

const login = (data: { email: string; password: string }) => {
  $fetch("/api/auth/getToken", {
    method: "POST",
    body: data,
  }).then((res) => {
    navigateTo('/admin/events')
  })
    .catch((err) => {
      error.value = 'Hibás email vagy jelszó!';
    });
};
</script>

<template>
  <h1><Icon name="eos-icons:admin-outlined" /> Krisna-völgy Admin</h1>

  <h3 v-if="error">{{ error }}</h3>

  <FormKit
    type="form"
    @submit="login"
    submit-label="Uccu neki!"
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
