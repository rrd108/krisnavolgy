<script setup lang="ts">
  import Menu from 'types/Menu'

  const props = defineProps({
    menus: {
      type: Array as PropType<Menu[]>,
      required: true,
    },
  })

  const isOpen = ref(false)
</script>

<template>
  <nav>
    <ClientOnly>
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
</template>

<style scoped>
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
  }
  nav a {
    text-decoration: none;
  }
  ul ul {
    margin-left: 1em;
    font-size: 1rem;
  }
  ul {
    font-family: 'Open Sans', serif;
  }
  ul.open {
    transform: translateX(-100vw);
  }
</style>
