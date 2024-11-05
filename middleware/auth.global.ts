export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith('/admin/login')) {
    return
  }
  
  if (import.meta.server && to.path.startsWith('/admin')) {
    return navigateTo('/admin/login')
  }

  if (import.meta.client) {
    const userStore = useUserStore()
    if (!userStore.token && to.path.startsWith('/admin')) {
      console.log('redirecting to login as user is not logged in')
      return navigateTo('/admin/login')
    }
  }
})
