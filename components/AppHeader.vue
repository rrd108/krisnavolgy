<script setup lang="ts">
  import StrapiResponse from 'types/StrapiResponse'
  import { MainMenu, Menu } from 'types/MainMenu'

  const { isDesktop } = useDevice()

  const client = useStrapiClient()
  let response = {} as StrapiResponse<MainMenu>
  try {
    response = await client<StrapiResponse<MainMenu>>('/main-menus/1', {
      params: { populate: 'deep' },
    })
  } catch (error) {
    console.error(error)
  }
  const menus = response.data.attributes.menu as Menu[]
</script>

<template>
  <header>
    <img src="/images/logo.png" alt="logo" />
    <AppHeaderMobile v-if="!isDesktop" :menus="menus" />
    <AppHeaderDesktop v-if="isDesktop" :menus="menus" />
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
</style>

<style scoped>
  @media screen and (min-width: 64rem) {
    header {
      padding: 1em;
    }
    img {
      height: 2rem;
    }
  }
</style>
types/StrapiResponse
