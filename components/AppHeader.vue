<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Menu from '../types/Menu'

  const isOpen = ref(false)

  const client = useStrapiClient()
  let menu = {} as StrapiResponse<Menu>
  try {
    menu = await client<StrapiResponse<Menu>>('/main-menus', {
      params: { populate: 'deep' },
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
        <font-awesome-icon
          :icon="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          @click="isOpen = !isOpen"
          id="menu-remote"
        />
      </ClientOnly>
      <ul :class="{ open: isOpen }">
        <li v-for="item in menu.data?.attributes.Menu_group">
          <NuxtLink :to="item.Link">{{ item.Menu_name }}</NuxtLink>
          <ul>
            <li v-for="subItem in item.Menu_item">
              <NuxtLink :to="subItem.Link">{{
                subItem.Menu_item_name
              }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <SearchInput :placeholder="menu.data?.attributes.search_field" />
        </li>
        <li>
          <span v-for="item in menu.data?.attributes.Social_media_bar">
            <ClientOnly>
              <NuxtLink :to="item.Link">
                <font-awesome-icon :icon="item.Fontawesome_icon" />
              </NuxtLink>
            </ClientOnly>
          </span>
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
  #menu-remote {
    z-index: 4;
    position: relative;
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
  nav > ul {
    position: absolute;
    top: 0;
    right: -100vw;
    z-index: 3;
    background-color: #fff;
    padding: 0.5em;
    transition: transform 350ms ease-in-out;
    line-height: 1.25em;
    font-size: 1.5rem;
    width: 75vw;
    font-family: 'Playfair Display', serif;
  }
  nav a {
    text-decoration: none;
  }
  ul ul {
    margin-left: 1em;
    font-size: 1rem;
    font-family: 'Open Sans', serif;
  }
  ul.open {
    transform: translateX(-100vw);
  }
</style>
