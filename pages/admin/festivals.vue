<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

  const userStore = useUserStore()
  const { allComingFestivals } = await useFestivals()

  interface Festival {
    id: number
    title: string
    start_date: string
    end_date: string
    description?: string
    long_description?: string
    url?: string
    thumbnail?: string
  }

  const emptyFestival = {
    id: 0,
    title: '',
    start_date: '',
    end_date: ''
  }
  const selectedFestival = ref<Festival>({ title: '', long_description: '...' } as Festival)

  const isSaving = ref(false)
  const handleSubmit = () => {
    isSaving.value = true
    if (selectedFestival.value.id === 0) {
      createFestival()
    } else {
      updateFestival()
    }
  }

  const createFestival = () => {
    $fetch('/api/festivals', {
      method: 'POST',
      body: selectedFestival.value,
      headers: {
        Token: userStore.token
      }
    })
      .then((res) => {
        if (res.result.success) {
          isSaving.value = false
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const updateFestival = () => {
    $fetch('/api/festivals', {
      method: 'PATCH',
      body: selectedFestival.value,
      headers: {
        Token: userStore.token
      }
    })
      .then((res) => {
        if (res.result.success) {
          isSaving.value = false
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const deleteFestival = () => {}

  const suggestedSlug = computed(() => {
    return slugify(selectedFestival.value.title)
  })
</script>

<template>
  <h1 class="df sb">
    <span>
      <Icon name="material-symbols:tips-and-updates-outline-rounded" />
      Programok
    </span>
    <Icon
      name="material-symbols-light:add-diamond"
      class="cp"
      @click="selectedFestival = emptyFestival"
    />
  </h1>

  <ul>
    <li
      v-for="festival in allComingFestivals"
      :key="festival.id"
      @click="selectedFestival = festival"
    >
      <h5>
        {{ festival.title }}
        <Icon name="mdi:fountain-pen-tip" />
      </h5>
      <small>{{ festival.start_date }}</small>
      <small v-if="festival.end_date !== festival.start_date">- {{ festival.end_date }}</small>
    </li>
  </ul>

  <FormKit
    v-show="selectedFestival.id >= 0"
    v-model="selectedFestival"
    type="form"
    :actions="false"
    @submit="handleSubmit"
  >
    <h2>{{ selectedFestival.id ? 'Szerkesztés' : 'Létrehozás' }}</h2>
    <FormKit type="text" name="title" label="Cím" :classes="{ input: 'w80' }" />
    <div class="df">
      <FormKit type="date" name="start_date" label="Kezdés" :classes="{ outer: 'date-input' }" />
      <FormKit
        type="date"
        name="end_date"
        label="Befejezés"
        optional
        :classes="{ outer: 'date-input' }"
      />
    </div>
    <FormKit
      type="textarea"
      name="description"
      label="Leírás"
      optional
      :classes="{ input: 'w80' }"
    />
    <label>Hosszú leírás</label>
    <TiptapEditor
      :key="selectedFestival.id"
      :content="selectedFestival.long_description || ''"
      @update="selectedFestival.long_description = $event"
    />

    <FormKit type="text" name="url" :label="`Slug: ${suggestedSlug}`" optional />
    <FormKit type="text" name="thumbnail" label="Kép" optional />

    <div class="df">
      <FormKit type="submit" :disabled="isSaving">
        <Icon v-if="isSaving" name="eos-icons:loading" />
        <Icon
          v-if="!isSaving"
          :name="selectedFestival.id ? 'mdi:fountain-pen-tip' : 'material-symbols-light'"
        />
        {{ selectedFestival.id ? 'Módosítás' : 'Létrehozás' }}
      </FormKit>

      <FormKit
        v-show="selectedFestival.id > 0"
        type="button"
        label="Törlés"
        :classes="{
          input: { delete: true }
        }"
        @click="deleteFestival"
      >
        <Icon name="mdi:trash-can-outline" />
        Törlés
      </FormKit>
    </div>
  </FormKit>
</template>

<style scoped>
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  }
  li {
    background-color: var(--link-color);
    color: var(--light);
    padding: 0.5em;
    border-radius: 0.25em;
  }
  h5 {
    display: flex;
    justify-content: space-between;
  }
  .date-inputs {
    display: flex;
    gap: 1em;
  }
  .date-input {
    flex: 1;
  }
</style>
