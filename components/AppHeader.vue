<script setup lang="ts">
const menus = [
  { label: "Főoldal", path: "/", icon: "line-md:home-simple-twotone" },
  { label: "Látogatás", path: "/latogatas" },
  //{ label: 'Programok', path: '/programok' },
  { label: "Szállás", path: "https://vendeghaz.krisnavolgy.hu" },
  //    { label: 'Étterem', path: '/etterem' },
  { label: "Webshop", path: "https://bolt.krisnavolgy.hu" },
  //{ label: "Házirend", path: "/hazirend" },
  //{ label: "Útvonal", path: "/utvonal" },
  //{ label: "Rólunk", path: "/rolunk" },
  //    { label: 'Kapcsolat', path: '/kapcsolat' },
];

/**
 * <ul><li  current-menu-item current_page_item home 9166"><a href="https://krisnavolgy.hu" aria-current="page">Krisna-völgy</a>
<ul>
	<li"><a href="https://krisnavolgy.hu/mi-krisna-volgy/">Mi Krisna-völgy?</a></li>
	<li"><a href="http://bolt.krisnavolgy.hu">Krisna-völgyi termékek</a></li>
	<li"><a href="https://krisnavolgy.hu/a-krisna-tudatrol/">Filozófia</a></li>
	<li"><a href="http://oktatas.krisnavolgy.hu/">Oktatás</a>
	<ul>
		<li"><a href="http://oktatas.krisnavolgy.hu">Általános Iskola</a></li>
		<li class="menu-item type-post_type object-post 7544"><a href="https://krisnavolgy.hu/bhaktivedanta-hittudomanyi-foiskola/">Főiskola</a></li>
		<li"><a href="http://oktatas.krisnavolgy.hu/a-konyvtar-bemutatasa">Könyvtár</a></li>
	</ul>
</li>
	<li"><a href="https://elvonulas.krisnavolgy.hu/">Elvonulás, lelki gyakorlatok</a></li>
	<li"><a href="https://krisnavolgy.hu/tamogatoink-szponzoraink/">Támogatóink, szponzoraink</a></li>
</ul>
</li>
<li"><a href="#">Kultúra és Program</a>
<ul>
	<li"><a href="#">Látnivalók</a>
	<ul>
		<li"><a href="https://krisnavolgy.hu/tehenvedelem/">Tehenészet</a></li>
		<li class="menu-item type-post_type object-post 7631"><a href="https://krisnavolgy.hu/krisna-vogyi-mandir/">Templomépület</a></li>
		<li"><a href="https://krisnavolgy.hu/biokerteszet/">Biokertészet</a></li>
		<li"><a href="https://krisnavolgy.hu/altalanos-iskola/">Általános Iskola</a></li>
		<li class="menu-item type-post_type object-post 7622"><a href="https://krisnavolgy.hu/szent-zarandokhelyeink/">Szent helyek</a></li>
		<li"><a href="https://krisnavolgy.hu/isodyana-botanikus-kert/">Botanikus kert</a></li>
	</ul>
</li>
	<li"><a href="#">Rendezvények</a>
	<ul>
		<li"><a href="https://krisnavolgy.hu/rendezvenyek/">Turisztikai események</a></li>
		<li"><a href="http://okovolgy.hu/tanfolyamok/">Öko találkozók</a></li>
		<li"><a href="https://krisnavolgy.hu/vallasi-rendezvenyek/">Vallási rendezvények</a></li>
	</ul>
</li>
	<li"><a href="https://krisnavolgy.hu/csoportoknak/">Csoportos programok</a></li>
</ul>
</li>
<li"><a href="#">Látogatás</a>
<ul>
	<li"><a href="#">Jegyárak</a>
	<ul>
		<li"><a href="https://krisnavolgy.hu/jegyarak/">Mindennapi belépőjegyek</a></li>
		<li"><a href="https://krisnavolgy.hu/csoportoknak/">Csoportos árak</a></li>
	</ul>
</li>
	<li"><a href="https://krisnavolgy.hu/nyitvatartas/">Nyitvatartás</a></li>
	<li"><a href="#">Házirend</a>
	<ul>
		<li"><a href="https://krisnavolgy.hu/hazirend/">Házirendünk</a></li>
		<li"><a href="https://vendeghaz.krisnavolgy.hu/">Szállásainkon</a></li>
	</ul>
</li>
	<li"><a href="#">Szolgáltatásaink</a>
	<ul>
		<li"><a href="https://krisnavolgy.hu/ajandekbolt/">Ajándékbolt</a></li>
		<li"><a href="https://krisnavolgy.hu/etterem/">Govinda étterem</a></li>
		<li class="menu-item type-post_type object-post 7725"><a href="https://krisnavolgy.hu/okrosturak/">Ökrös szekér körút</a></li>
	</ul>
</li>
	<li"><a href="https://krisnavolgy.hu/megkozelithetoseg/">Útvonal Krisna-völgybe…</a></li>
	<li"><a href="https://krisnavolgy.hu/kornyekunk/">Környékünk</a></li>
	<li"><a href="https://krisnavolgy.hu/parkolas/">Parkolás</a></li>
	<li"><a href="https://krisnavolgy.hu/fogyatekkal-elok/">Fogyatékkal élők</a></li>
	<li"><a href="#">Szállás</a>
	<ul>
		<li"><a href="https://vendeghaz.krisnavolgy.hu/">Krisna-völgyi szállások</a></li>
		<li"><a href="http://www.radheresort.hu/">Radhe Resort</a></li>
	</ul>
</li>
</ul>
</li>
<li"><a href="#">Öko-völgy</a>
<ul>
	<li"><a href="https://krisnavolgy.hu/mi-az-oko-volgy/">Mi az Öko-völgy?</a></li>
	<li"><a href="https://krisnavolgy.hu/biofarm/">Biofarm</a></li>
	<li"><a href="https://krisnavolgy.hu/tehenvedelem/">Tehénvédelem</a></li>
	<li"><a href="https://krisnavolgy.hu/kornyezettudatossagrol/">Fenntarthatóság</a></li>
	<li"><a href="https://krisnavolgy.hu/isodyana-botanikus-kert/">Botanikus kert</a></li>
	<li"><a href="http://okovolgy.hu/">Ökovölgy.hu</a></li>
</ul>
</li>
<li"><a href="https://krisnavolgy.hu/hirek/">Hírek</a></li>
<li"><a href="#">Kapcsolat</a>
<ul>
	<li"><a href="https://krisnavolgy.hu/kapcsolat-turisztika-csoport-bejelentkezes/">Turisztika, csoport bejelentkezés</a></li>
	<li"><a href="https://krisnavolgy.hu/guesthouses/?lang=hu">Szállásfoglalás</a></li>
	<li"><a href="https://krisnavolgy.hu/sajto/">Sajtó</a></li>
	<li"><a href="http://okovolgy.hu/">Öko-völgy</a></li>
	<li"><a href="https://krisnavolgy.hu/kapcsolat-altalanos-iskola-ovoda/">Általános iskola, óvoda</a></li>
	<li"><a href="https://krisnavolgy.hu/kapcsolat-elvonulas-lelki-gyakorlatok/">Elvonulás, lelki gyakorlatok</a></li>
</ul>
</li>
Search
 */

const isMobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="logo" />
    </NuxtLink>
    <nav>
      <Icon
        :name="isMobileMenuOpen ? 'line-md:close' : 'line-md:menu'"
        id="mobileMenu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :class="{ open: isMobileMenuOpen }"
      />
      <ul :class="{ open: isMobileMenuOpen }">
        <li v-for="menu in menus">
          <NuxtLink :to="menu.path">
            <Icon v-if="menu.icon" :name="menu.icon" />
            {{ menu.label }}
          </NuxtLink>
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
a {
  color: var(--light);
}

@media screen and (max-width: 40rem) {
  #mobileMenu {
    display: block;
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 3;
    color: var(--link-color);
  }
  #mobileMenu.open {
    color: var(--light);
  }
  header {
    padding: 0.25em;
    align-items: flex-start;
  }
  ul {
    flex-direction: column;
    gap: 0.5em;
    margin-top: -0.25em;
    padding: 0.5em 3em 0.5em 1em;
    transform: translateX(100%);
    transform-origin: calc(100% - 1.25em) 6.5em;
    transition: transform 350ms ease-in-out;
    background-color: var(--link-color);
    position: fixed;
    right: 0;
    z-index: 2;
  }
  ul.open {
    transform: translateX(0);
  }
}
</style>
