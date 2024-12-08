<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

  const userStore = useUserStore()

  const isUploading = ref(false)
  const uploadedFile = ref<string>('')

  const upload = async (data: any) => {
    const file = data.file?.[0]
    if (!file) {
      throw new Error('No file selected')
    }

    const formData = new FormData()
    formData.append('file', file.file)

    try {
      isUploading.value = true
      const response = await $fetch('/api/upload', {
        method: 'POST',
        headers: {
          Token: userStore.token
        },
        body: formData
      })

      uploadedFile.value = response.filename
      isUploading.value = false
    } catch (error) {
      console.error('Upload failed', error)
    } finally {
      isUploading.value = false
    }
  }
</script>

<template>
  <h1>
    <Icon name="material-symbols:upload" />
    Feltöltés
  </h1>

  <FormKit type="form" submit-label="Feltöltés" :disabled="isUploading" @submit="upload">
    <FormKit
      type="file"
      name="file"
      label="Fájl"
      accept="image/*"
      validation="required|mime:image/jpeg,image/png,image/gif,image/webp"
    />
  </FormKit>

  <div v-if="uploadedFile">
    <h3>{{ uploadedFile }}</h3>
    <NuxtImg :src="`/images/${uploadedFile}`" />
  </div>
</template>

<style scoped></style>
