<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const message = ref('')

const addUser = async () => {
  if (!email.value || !email.value.includes('@')) {
    message.value = 'Kérjük, adj meg egy érvényes email címet'
    return
  }

  try {
    loading.value = true
    const response = await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value },
    })

    console.log(response)

    if (response.title == 'Member Exists') {
      message.value = 'Ez az email cím már fel van iratkozva'
    } else {
      message.value = 'Sikeres feliratkozás! Köszönjük!'
    }

    email.value = ''
  } catch (error: any) {
    message.value = error?.data?.message || 'Hiba történt a feliratkozás során'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section>
    <slot />
    <div>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        :disabled="loading"
      >
      <button :disabled="loading" @click="addUser">
        {{ loading ? "Folyamatban..." : "Feliratkozom" }}
      </button>
    </div>
    <p v-if="message" :class="{ error: !message.includes('Sikeres') }">
      {{ message }}
    </p>
  </section>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  border: thin solid var(--light);
  border-radius: 1em 0 0 1em;
}
button {
  background-color: var(--dark);
  color: #fff;
  border: none;
  padding: 0.6rem;
  border-radius: 0 1em 1em 0;
}
p {
  margin-bottom: 1em;
}
</style>
