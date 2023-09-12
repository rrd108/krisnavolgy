<script setup lang="ts">
import { menuQuery } from "~/querys/menu";

const { isDesktop } = useDevice();

const graphql = useStrapiGraphQL();
let result = {};
try {
  result = await graphql(menuQuery);
} catch (error) {
  console.log(error);
}
const menu = result.data.menu.data.attributes;
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <AppHeaderMobile v-if="!isDesktop" :content="menu" />
    <AppHeaderDesktop v-if="isDesktop" :content="menu" />
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

@media screen and (min-width: 64rem) {
  header {
    padding: 1em;
  }
  img {
    height: 2rem;
  }
}
</style>
