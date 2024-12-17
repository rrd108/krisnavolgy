<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

  const userStore = useUserStore()
  const { allComingFestivals, removeFestival } = await useFestivals()

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

  const deleteFestival = () => {
    $fetch('/api/festivals', {
      method: 'DELETE',
      query: { id: selectedFestival.value.id },
      headers: {
        Token: userStore.token
      }
    })
      .then((res) => {
        if (res.result.success) {
          selectedFestival.value = emptyFestival
          removeFestival(selectedFestival.value.id)

          isSaving.value = false
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const suggestedSlug = computed(() => {
    return slugify(selectedFestival.value.title)
  })

  const dialog = useTemplateRef('dialog')
  const galleryDialog = useTemplateRef('galleryDialog')

  const generateContent = async () => {
    dialog.value?.showModal()
    const generated = await $fetch('/api/ai/festivalLongDescription', {
      query: { id: selectedFestival.value.id },
      headers: {
        Token: userStore.token
      }
    })
    selectedFestival.value.long_description = generated
    dialog.value?.close()
  }

  const generateDescription = async () => {
    dialog.value?.showModal()
    const generated = await $fetch('/api/ai/festivalDescription', {
      query: { id: selectedFestival.value.id },
      headers: {
        Token: userStore.token
      }
    })
    selectedFestival.value.description = generated
    dialog.value?.close()
  }

  const imageIdeas = ref<string[]>([])
  const generateImageIdeas = async () => {
    dialog.value?.showModal()
    const generated = await $fetch('/api/ai/festivalImageIdeas', {
      query: { id: selectedFestival.value.id },
      headers: {
        Token: userStore.token
      }
    })
    imageIdeas.value = generated
    dialog.value?.close()
  }

  const changeFestival = (festival: Festival) => {
    selectedFestival.value = festival
    imageIdeas.value = []
  }

  const openGallery = async () => {
    galleryDialog.value?.showModal()
  }

  const handleImageSelect = (filename: string) => {
    selectedFestival.value.thumbnail = filename
    galleryDialog.value?.close()
  }
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

  <ul class="dg">
    <li
      v-for="festival in allComingFestivals"
      :key="festival.id"
      :class="{ closed: !festival.url }"
      @click="changeFestival(festival)"
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
    :disabled="isSaving"
    type="form"
    :actions="false"
    @submit="handleSubmit"
  >
    <h2>{{ selectedFestival.id ? 'Szerkesztés' : 'Létrehozás' }}</h2>
    <FormKit type="text" required name="title" label="Fesztivál neve" input-class="w80" />
    <div class="df">
      <FormKit
        type="date"
        required
        name="start_date"
        label="Kezdés"
        :classes="{ outer: 'date-input' }"
      />
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
      label="Rövid leírás"
      optional
      input-class="w80"
      maxlength="135"
      validation="length:0,135"
    >
      <template #label>
        Rövid leírás
        <button
          type="button"
          class="ai"
          title="Rövid leírás"
          :disabled="Number(selectedFestival.long_description?.length || 0) < 120"
          @click="generateDescription"
        >
          <Icon name="gravity-ui:magic-wand" />
        </button>
      </template>
    </FormKit>

    <label>Leírás</label>
    <TiptapEditor
      :key="selectedFestival.id"
      v-model="selectedFestival.long_description"
      @update="selectedFestival.long_description = $event"
      @generate-content="generateContent"
    />

    <FormKit
      type="text"
      name="url"
      :label="`Slug: ${suggestedSlug}`"
      optional
      help="Az egyházi fesztiválok esetén hagyd üresen"
    />
    <FormKit type="text" name="thumbnail" label="Kép ötletek" optional>
      <template #label>
        Kép
        <button type="button" title="Tallózás" class="thin" @click="openGallery">
          <Icon name="jam:pictures" />
        </button>
        |
        <button
          type="button"
          class="ai thin"
          title="Kép ötletek"
          :disabled="Number(selectedFestival.long_description?.length || 0) < 120"
          @click="generateImageIdeas"
        >
          <Icon name="gravity-ui:magic-wand" />
        </button>
      </template>
    </FormKit>
    <NuxtImg
      v-if="selectedFestival.thumbnail"
      :src="`/images/${selectedFestival.thumbnail}`"
      width="300"
    />

    <div v-if="imageIdeas.length">
      <h3>Kép ötletek</h3>
      <ul class="imageIdeas">
        <li v-for="idea in imageIdeas" :key="idea">{{ idea }}</li>
      </ul>
    </div>

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

  <dialog id="loading" ref="dialog">
    <Icon name="eos-icons:loading" />
  </dialog>

  <dialog id="gallery" ref="galleryDialog">
    <ImageGallery @select="handleImageSelect" />
  </dialog>
</template>

<style scoped>
  ul {
    grid-template-columns: repeat(6, 1fr);
    gap: 1em;
  }
  li {
    background-color: var(--link-color);
    color: var(--light);
    padding: 0.5em;
    border-radius: 0.25em;
  }
  li.closed {
    background-color: var(--secondary-link-color);
  }
  ul.imageIdeas li {
    background: none;
    color: var(--dark);
    margin-left: 1em;
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
  dialog {
    border: none;
    color: var(--light);
    background-color: var(--dark);
  }
  #loading {
    font-size: 5em;
    margin: 5em auto;
  }
  #gallery {
    margin: 2em auto;
    width: 80%;
    height: 80%;
  }
  dialog::backdrop {
    background-color: var(--dark);
    opacity: 0.75;
  }
  .ai {
    background-color: var(--secondary-link-color);
  }
  .thin {
    padding: 0.5em;
  }
</style>
