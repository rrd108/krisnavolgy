<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Menu from '../types/Menu'

  const isOpen = ref(false)

  const client = useStrapiClient()
  let menu = {} as StrapiResponse<Menu>
  try {
    menu = await client<StrapiResponse<Menu>>('/main-menu', {
      params: { populate: '*' },
    })
  } catch (error) {
    console.error(error)
  }
</script>

<template>
  <header>
    <img src="/images/logo.png" alt="logo" />
    <nav>
      <ClientOnly>
        <font-awesome-icon icon="fa-solid fa-bars" @click="isOpen = !isOpen" />
      </ClientOnly>
      <ul :class="{ open: isOpen }">
        <li v-for="item in menu.data?.attributes.Menu_group">
          <NuxtLink :to="item.Link">{{ item.Menu_name }}</NuxtLink>
        </li>
        <hr />
        <li>{{ menu.data?.attributes.search_field }}</li>
        <hr />
        <li v-for="item in menu.data?.attributes.Social_media_bar">
          {{ item.Link }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    height: var(--header-height);
    height: var(--header-dynamic-height);
    display: flex;
    justify-content: space-between;
    background-color: #d9d8c5;
  }
  img {
    height: calc(100% - 2 * 0.5em);
    margin: 0.5em;
  }
  svg {
    margin: 0.75rem;
  }
  nav {
    position: relative;
  }
  ul {
    position: absolute;
    right: -100vw;
    z-index: 3;
    background-color: #fff;
    padding: 0.5em;
    transition: transform 350ms ease-in-out;
  }
  ul.open {
    transform: translateX(-100vw);
  }
</style>
