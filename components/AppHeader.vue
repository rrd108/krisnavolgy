<script setup lang="ts">
const menus = [
  { label: 'Főoldal', path: '/', icon: 'line-md:home-simple-twotone' },
  // {
  //   label: "Látogatás",
  //   icon: "material-symbols:landscape-2-outline",
  //   children: [
  //     {
  //       label: "Jegyárak",
  //       icon: "lucide:tickets",
  //       children: [
  {
    label: 'Belépőjegy',
    path: '/belepojegy',
    icon: 'material-symbols:person',
  },
  {
    label: 'Csoportok',
    path: '/csoportok',
    icon: 'fa6-solid:people-group',
  },
  //   ],
  // },
  {
    label: 'Nyitvatartás',
    path: '/nyitvatartas',
    icon: 'material-symbols:alarm-outline',
  },
  {
    label: 'Házirend',
    path: '/hazirend',
    icon: 'material-symbols:list-alt-check-outline-rounded',
  },
  //   ],
  // },
  {
    label: 'Rendezvények',
    path: '/programok',
    icon: 'material-symbols:tips-and-updates-outline-rounded',
  },
  {
    label: 'Szállás',
    path: 'https://vendeghaz.krisnavolgy.hu',
    icon: 'material-symbols:add-home-work-outline',
  },
  { label: 'Étterem', path: '/etterem', icon: 'ic:sharp-restaurant-menu' },
  {
    label: 'Webshop',
    path: 'https://bolt.krisnavolgy.hu',
    icon: 'material-symbols:shopping-cart-outline',
  },
  {
    label: 'Útvonal',
    path: '/utvonal',
    icon: 'material-symbols-light:directions-car',
  },
  { label: 'Rólunk', path: '/rolunk', icon: 'material-symbols:info-outline' },
  { label: 'Kapcsolat', path: '/kapcsolat', icon: 'material-symbols:call-log' },
  { label: 'Ajándékutalvány', path: '/ajandekutalvany', icon: 'material-symbols:featured-seasonal-and-gifts' },
]

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" >
    </NuxtLink>
    <nav @click="isMobileMenuOpen = !isMobileMenuOpen">
      <Icon
        id="mobileMenu"
        :name="isMobileMenuOpen ? 'line-md:close' : 'line-md:menu'"
        :class="{ open: isMobileMenuOpen }"
      />
      <ul :class="{ open: isMobileMenuOpen }">
        <li v-for="menu in menus" :key="menu.label">
          <HeaderMenuLink :menu />
          <ul v-if="menu.children">
            <li v-for="child in menu.children" :key="child.label">
              <HeaderMenuLink :menu="child" />
              <ul v-if="child.children">
                <li
                  v-for="grandchild in child.children"
                  :key="grandchild.label"
                >
                  <HeaderMenuLink :menu="grandchild" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#mobileMenu {
  display: none;
}
header {
  height: var(--header-height);
  height: var(--header-dynamic-height);
  padding: 1em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1em solid var(--divider-color);
}
img {
  height: 2rem;
}
ul {
  display: flex;
  gap: 1em;
}

@media screen and (max-width: 40rem) {
  header {
    padding: 0.25em;
    align-items: flex-start;
    --menuIndex: 3;
  }

  #mobileMenu {
    display: block;
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: calc(var(--menuIndex) + 1);
    color: var(--link-color);
  }
  #mobileMenu.open {
    color: var(--light);
  }
  nav ul {
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5em 0.5em 0.5em 1.5em;
  }
  nav > ul {
    margin-top: -0.25em;
    padding: 0.5em 3em 0.5em 1em;
    transform: translateX(100%);
    transform-origin: calc(100% - 1.25em) 6.5em;
    transition: transform 350ms ease-in-out;
    background-color: var(--link-color);
    position: fixed;
    right: 0;
    z-index: var(--menuIndex);
  }
  nav > ul.open {
    transform: translateX(0);
  }
  li {
    margin-bottom: 0.25em;
  }
}
</style>
