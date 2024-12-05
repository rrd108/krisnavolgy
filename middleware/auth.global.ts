export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith('/admin/login')) {
    return
  }

  if (to.path.startsWith('/admin') && import.meta.server) {
    return navigateTo('/admin/login')
  }

  if (to.path.startsWith('/admin') && import.meta.client) {
    const userStore = useUserStore()
    if (!userStore.token) {
      console.log('redirecting to login as user is not logged in')
      return navigateTo('/admin/login')
    }
  }
})
