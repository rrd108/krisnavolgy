<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
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
  <h1>
    <Icon name="eos-icons:admin-outlined" />
    Krisna-völgy Admin
  </h1>

  <h3 v-if="error" class="rounded">{{ error }}</h3>

  <section>
    <FormKit type="form" submit-label="Uccu neki!" @submit="login" class="rounded">
      <FormKit
        type="email"
        name="email"
        label="Email"
        outer-class="breath"
        input-class="wideInput"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        outer-class="breath"
        input-class="wideInput"
      />
    </FormKit>
  </section>
</template>

<style scoped>
  h3 {
    background-color: var(--error);
    color: var(--light);
    padding: 1em;
  }
  section {
    display: grid;
    place-items: center;
    height: 75vh;
  }
  form {
    max-width: 30em;
    background-color: var(--light);
    padding: 1em;
  }
  .breath {
    margin: 1em 0;
  }
</style>
