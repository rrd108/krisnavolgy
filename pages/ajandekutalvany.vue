<script setup lang="ts">
const order = reactive({
  ticket: 0,
  lunch: 0,
  name: '',
  email: ''
})
const calculateTotal = () => order.ticket * 3400 + order.lunch * 3890
const total = computed(() => {
  return Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', useGrouping: true, maximumFractionDigits: 0 }).format(calculateTotal())
})

const sendOrder = async () => {
  if (!order.name || !order.email || !(order.ticket + order.lunch)) {
    alert('Nevet, emailcímet és mennyiséget meg kell adnod!')
    return
  }

      const { data, status, error } = await useFetch('/api/simplepay/order', {
        method: 'POST',
        body: {...order, total: calculateTotal()}
      })
    if (data.value.paymentUrl) {
        navigateTo(data.value.paymentUrl, {external: true})
    }

}
</script>

<template>
  <h1><Icon name="material-symbols:featured-seasonal-and-gifts" /> Krisna-völgyi ajándékutalványok</h1>
<h2>Ajándékozz élményt a Krisna-völgyben! Lepd meg szeretteidet egy különleges ajándékkal.</h2>
<p>Egy belépőjeggyel, mely lehetőséget ad felfedezni a csodálatos Krisna-völgyet, illetve egy finom, vegetáriánus ebéddel, amely a helyi közösség hagyományos ételeit kínálja. Az ajándékutalvány ideális választás mindazoknak, akik szeretnének egy nyugodt, spirituális élményben részesülni, miközben kapcsolatba kerülnek a természet szépségével és a helyi kultúrával.</p>

<p>Fedezd fel Krisna-völgyet, élvezd a finom falatokat, és tölts el egy felejthetetlen napot egy különleges helyen - ajándékozd meg szeretteidet egy valódi kikapcsolódással.</p>

<form @submit.prevent="sendOrder">
<div class="dg">
  <section>
<h3>Ajándék belépő</h3>
<NuxtImg src="/images/holi.jpg" alt="Ajándék belépőjegy" sizes="sm:40vw md:40vw lg:40vw" />
<strong>3.400 Ft/fő</strong>
<input type="number" v-model="order.ticket" /> db
</section>

<section>
<h3>Ebéd menü</h3>
<NuxtImg src="/images/holi.jpg" alt="Ebéd menü" sizes="sm:40vw md:40vw lg:40vw" />
<strong>3.890 Ft/fő</strong>
<input type="number" v-model="order.lunch" /> db
</section>
</div>

  <label>Neved</label>
  <input type="text" v-model="order.name" />
  <label>Email címed</label>
  <input type="email" v-model="order.email" />

<h3>Összesen: {{ total }}</h3>
<button><Icon name="material-symbols:featured-seasonal-and-gifts" /> Rendelés elküldése</button>
<small>TODO számlát kérek</small>
</form>

<p>Az ajándék belépőjegyek ára az aktuális Krisna-völgyi belépőjegy árával egyezik meg.</p>

<p>Az ajándék ebéd menü kártyák ára az aktuális Krisna-völgyi étterem napi menü árával egyezik meg.</p>

<p>Az ajándék belépőjegyek egyszeri belépésre használhatóak fel és tartalmaznak vendégvezetést is az indiai szentélyben, illetve a birtok bejárását egyénileg.</p>

<p>Az ajándék kártyák a kiemelt rendezvényeinken is felhasználhatóak, kivéve a Krisna-völgyi Búcsú 3 napja.</p>

<p>Az ajándék kártyák vissza-, illetve készpénzre nem válthatóak, további értékesítésük tilos. Felhasználáskor az ajándék kártyák árából nem adható vissza készpénz.</p>

<p>Rendelj ajándék belépőjegyet és ebéd menü kártyát szeretteidnek most!</p>


      <Divider />

    <h3>Érdekelhet még</h3>
    <ul>
      <li>
        <NuxtLink to="/belepojegy">Belepőjegy</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/csoportok">
          Csoportoknak szóló ajánlataink
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/programok">Programjaink</NuxtLink>
      </li>
    </ul>

</template>

<style scoped>
form {
    background-color: var(--light);
    padding: .5em;
}
label {text-align: left;}
.dg {
 grid-template-columns: 1fr 1fr;
 text-align: center;
}
h3 {
  margin: .25em;
}
input {width: 90%;}
input[type="number"] {width: 2em; margin-left: 1em;}
button {width: 100%;}
</style>
