<script setup lang="ts">
definePageMeta({
  layout: "admin",
})

const userStore = useUserStore()
const { allComingFestivals } =  await useFestivals()

interface Festival {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  description?: string;
  long_description?: string;
  url?: string;
  thumbnail?: string;
}

const emptyFestival = {
  id: 0,
  title: "",
  start_date: "",
  end_date: "",
}
const selectedFestival = ref<Festival>({} as Festival)

const handleSubmit = () => {
  if (selectedFestival.value.id === 0) {
    createFestival()
  } else {
    updateFestival()
  }
}

const createFestival = () => {
  $fetch("/api/festivals", {
    method: "POST",
    body: selectedFestival.value,
    headers: {
      Token: userStore.token,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

const updateFestival = () => {
  $fetch("/api/festivals", {
    method: "PATCH",
    body: selectedFestival.value,
    headers: {
      Token: userStore.token,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

const deleteFestival = () => {}
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
      <h5>{{ festival.title }} <Icon name="mdi:fountain-pen-tip" /></h5>
      <small>{{ festival.start_date }}</small>
      <small v-if="festival.end_date !== festival.start_date">
        - {{ festival.end_date }}
      </small>
    </li>
  </ul>

  <FormKit
    v-show="selectedFestival.id >= 0"
    v-model="selectedFestival"
    type="form"
    :actions="false"
    @submit="handleSubmit"
  >
    <h2>{{ selectedFestival.id ? "Szerkesztés" : "Létrehozás" }}</h2>
    <FormKit type="text" name="title" label="Cím" />
    <FormKit type="date" name="start_date" label="Kezdés" />
    <FormKit type="date" name="end_date" label="Befejezés" optional />
    <FormKit type="textarea" name="description" label="Leírás" optional />
    <FormKit
      type="textarea"
      name="long_description"
      label="Hoszzú leírás"
      optional
    />
    <FormKit type="text" name="url" label="URL" optional />
    <FormKit type="text" name="thumbnail" label="Kép" optional />

    <div class="df">
      <FormKit type="submit">
        <Icon
          :name="
            selectedFestival.id
              ? 'mdi:fountain-pen-tip'
              : 'material-symbols-light:add-diamond'
          "
        />
        {{ selectedFestival.id ? "Módosítás" : "Létrehozás" }}
      </FormKit>

      <FormKit
        v-show="selectedFestival.id > 0"
        type="button"
        label="Törlés"
        :classes="{
          input: { delete: true },
        }"
        @click="deleteFestival"
      >
        <Icon name="mdi:trash-can-outline" /> Törlés
      </FormKit>
    </div>
  </FormKit>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
</style>
