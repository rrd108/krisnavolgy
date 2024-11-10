import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  
  const login = async (data: { email: string; password: string }) => {
    try {
      // Make your API call here
      const response = await $fetch('/api/auth/getToken', {
        method: 'POST',
        body: data,
      })
      token.value = (response as { token: string }).token
      return navigateTo('/admin/festivals')
    } catch (err) {
      throw createError({
        statusCode: 401,
        message: 'Hibás email vagy jelszó!',
      })
    }
  }

  return {
    token,
    login,
  }
})
