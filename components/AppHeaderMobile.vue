<script setup lang="ts">
  import Menu from 'types/Menu'

  const props = defineProps({
      content: Object,
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
      <li v-for="zone in content.menuZone">
        <NuxtLink
          v-if="zone.__typename === 'ComponentMenuLinkExternal'"
          :to="zone.url"
          >{{ zone.label }}</NuxtLink
        >

        <NuxtLink
          v-if="zone.__typename === 'ComponentMenuLinkInternal'"
          :to="zone.page.data.attributes.slug"
        >
          {{ zone.label }}</NuxtLink
        >
        <ul v-if="zone.__typename === 'ComponentMenuDropdown'">
          {{
            zone.label
          }}
            <li v-for="link in zone.linkInternal">
              <NuxtLink :to="link.page.data.attributes.slug">{{
                link.label
              }}</NuxtLink>
            </li>
            <li v-for="link in zone.linkExternal">
              <NuxtLink :to="link.url">{{ link.label }}</NuxtLink>
            </li>
        </ul>
      </li>
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
