<script setup lang="ts">
  import StrapiResponse from '../types/StrapiResponse'
  import Menu from '../types/Menu'
  import MainMenu from 'types/MainMenu'

  const { isDesktop } = useDevice()

  const isOpen = isDesktop ? ref(true) : ref(false)

  const client = useStrapiClient()
  let response = {} as StrapiResponse<MainMenu[]>
  try {
    response = await client<StrapiResponse<MainMenu[]>>('/main-menus', {
      params: { populate: 'deep' },
    })
  } catch (error) {
    console.error(error)
  }
  const menus = response.data[0].attributes.menu as Menu[]
</script>

<template>
  <header>
    <img src="/images/logo.png" alt="logo" />
    <nav>
      <ClientOnly v-if="!isDesktop">
        <font-awesome-icon
          :icon="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          @click="isOpen = !isOpen"
          todo="no click handler for desktop"
          id="menu-remote"
        />
      </ClientOnly>
      <ul :class="{ open: isOpen }">
        <li v-for="item in menus">
          <NuxtLink :to="item.link">{{ item.menu_item }}</NuxtLink>
          <ul>
            <li v-for="subItem in item.sub_menu">
              <NuxtLink :to="subItem.link">{{ subItem.menu_item }}</NuxtLink>
            </li>
          </ul>
        </li>
        <!--li>
          <SearchInput :placeholder="menu.data?.attributes.search_field" />
        </!--li-->
        <!--li>
          <span v-for="item in menu.data?.attributes.Social_media_bar">
            <ClientOnly>
              <NuxtLink :to="item.Link">
                <font-awesome-icon :icon="item.Fontawesome_icon" />
              </NuxtLink>
            </ClientOnly>
          </span>
        </!--li-->
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

<style scoped>
  @media screen and (min-width: 64rem) {
    nav > ul {
      position: relative;
      right: auto;
    }
    ul.open {
      transform: none;
    }
  }
</style>
