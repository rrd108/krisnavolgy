export default defineNuxtRouteMiddleware((to) => {
    if (to.path == '/ajandek-belepojegyek-es-vendeghaz-ajandekkartya') {
        return navigateTo('/ajandekutalvany', { redirectCode: 301 })
    }
})
