<script setup lang="ts">
  import Menu from '~~/types/Menu'

  const props = defineProps({
    menus: {
      type: Array as PropType<Menu[]>,
      required: true,
    },
  })

  const showSubmenu = ref(0)
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="item in menus"
        @mouseenter="showSubmenu = item.id"
        @mouseleave="showSubmenu = 0"
      >
        <NuxtLink :to="item.link">{{ item.menu_item }}</NuxtLink>
        <ul v-show="showSubmenu == item.id">
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
  @media screen and (min-width: 64rem) {
    nav {
      z-index: 1;
    }
    nav > ul {
      display: flex;
      gap: 1em;
      justify-content: flex-end;
      background-color: var(--bg-light);
      font-size: 1em;
      cursor: pointer;
    }
    nav a {
      text-decoration: none;
      display: inline-block;
    }
    ul {
      font-family: 'Open Sans', serif;
      font-weight: bold;
    }
    li {
      text-align: center;
      padding-inline: 0.5em;
      width: 5rem;
    }
    li a {
      padding: 0.5em;
      white-space: nowrap;
    }
    li a:hover {
      background-color: var(--dark);
      color: var(--light);
    }
    ul ul li {
      text-align: left;
      margin: 0.5em;
    }
  }
</style>
