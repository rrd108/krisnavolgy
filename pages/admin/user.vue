<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

  const userStore = useUserStore()

  const password = ref('')
  const passwordAgain = ref('')
  const success = ref(false)

  const weak = computed(() => {
    const err = { len: true, mixedCase: true, special: true }
    if (password.value.length >= 6) {
      err.len = false
    }
    if (password.value.match(/[a-z]/) && password.value.match(/[A-Z]/)) {
      err.mixedCase = false
    }
    if (password.value.match(/[0-9\/*-+-.,_:?)\\(=/%!+\"'"]/)) {
      err.special = false
    }
    return err
  })
  const isStrongPass = computed(() => {
    if (!weak.value.len && !weak.value.mixedCase && !weak.value.special) {
      return true
    }
    return false
  })

  const changePassword = async () => {
    if (password.value !== passwordAgain.value) {
      alert('A két jelszó nem egyezik')
      return
    }

    const result = await useFetch('/api/auth/user', {
      method: 'PATCH',
      headers: {
        Token: userStore.token
      },
      body: { password: password.value }
    })
    success.value = result.data.value.success
  }
</script>

<template>
  <h1 class="df sb">
    <span>
      <Icon name="material-symbols:tips-and-updates-outline-rounded" />
      Jelszó
    </span>
  </h1>
  <p v-if="success">✅ Jelszó sikeresen megváltoztatva</p>
  <section v-if="!success">
    <div>
      <label for="password">Új jelszó</label>
      <input id="password" v-model="password" type="password" />
    </div>
    <div>
      <label for="password">Új jelszó megerősítése</label>
      <input id="passwordAgain" v-model="passwordAgain" type="password" />
    </div>

    <ul v-show="!updateDone" class="pass">
      <li :class="{ ok: !weak.len }">
        <font-awesome-icon :icon="weak.len ? 'exclamation-triangle' : 'check'" />
        minimum 6 karakter
      </li>
      <li :class="{ ok: !weak.mixedCase }">
        <font-awesome-icon :icon="weak.mixedCase ? 'exclamation-triangle' : 'check'" />
        kis és nagybetű
      </li>
      <li :class="{ ok: !weak.special }">
        <font-awesome-icon :icon="weak.special ? 'exclamation-triangle' : 'check'" />
        legalább 1 szám vagy 1 speciális karakter
      </li>
    </ul>

    <button :disabled="!isStrongPass" @click="changePassword">Uccu neki</button>
  </section>
</template>

<style scoped>
  div {
    margin: 1em;
  }
  label {
    display: inline-block;
    width: 12em;
  }

  .pass li {
    margin-bottom: 0.5em;
    transition: color 350ms ease;
  }
  svg {
    margin: 0 1rem;
  }
  .pass li::before {
    content: '⚠️';
  }
  .pass li.ok {
    color: var(--finished);
  }
  .pass li.ok::before {
    content: '✅';
  }
</style>
