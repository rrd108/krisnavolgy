<script setup lang="ts">
const props = defineProps({
  content: Object,
});
</script>

<template>
  <nav>
    <ul>
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
        <ul class="dropdown" v-if="zone.__typename === 'ComponentMenuDropdown'">
          {{
            zone.label
          }}
          <div class="dropdown-content">
            <li v-for="link in zone.linkInternal">
              <NuxtLink :to="link.page.data.attributes.slug">{{
                link.label
              }}</NuxtLink>
            </li>
            <li v-for="link in zone.linkExternal">
              <NuxtLink :to="link.url">{{ link.label }}</NuxtLink>
            </li>
          </div>
        </ul>
      </li>
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
    align-items: center;
    justify-content: center;
    background-color: var(--bg-light);
    font-size: 1em;
    cursor: pointer;
  }
  nav a {
    text-decoration: none;
    display: inline-block;
  }
  ul li {
    font-family: "Open Sans", serif;
    font-weight: bold;
  }
  nav > ul li {
    text-align: center;
    min-width: 5em;
  }
  nav > ul > li > ul {
    width: 100%;
  }
  li a {
    padding: 0.5em;
    white-space: nowrap;
    width: 100%;
  }
  li a:hover {
    background-color: var(--dark);
    color: var(--light);
  }
  ul ul li {
    text-align: left;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--light);
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px var(--dark);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
}
</style>
