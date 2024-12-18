<script setup>
  useHead({
    title: 'Házirend'
  })
</script>

<template>
  <h1>
    <Icon name="material-symbols:list-alt-check-outline-rounded" />
    Házirend
  </h1>

  <section>
    <p>
      Krisna-völgy kedvelt turisztikai célpont, élő falu de egyben egy lelki közösség otthona is.
      Ezért többekben felmerülhet, vajon milyen szabályok betartását kérjük a hozzánk látogatóktól?
    </p>

    <p>Íme Krisna-völgy házirendjének pár fontos eleme:</p>

    <ul>
      <li>
        <Icon name="icon-park-outline:shorts" />
        <p>
          Kérjük, hogy
          <strong>megfelelő ruházatban</strong>
          látogassátok meg Krisna-völgyet, kerülve a nagyon kihívó öltözetet: miniszoknya, mélyen
          dekoltált ruha, stb.
        </p>
      </li>
      <li>
        <Icon name="material-symbols:no-drinks" />
        <p>
          Kérjük,
          <strong>ne fogyasszatok alkoholt</strong>
          , mielőtt hozzánk érkeztek, mert ittas személyeket nem áll módunkban beengedni.
        </p>
      </li>

      <li>
        <Icon name="mdi:food-drumstick-off" />
        <p>
          Kérjük,
          <strong>ne hozzatok magatokkal húst, halat, tojást</strong>
          tartalmazó, illetve alkohol tartalmú ételt vagy italt, mert ilyen élelmiszereket nem lehet
          fogyasztani Krisna-völgyben.
        </p>
      </li>
      <li>
        <Icon name="mdi:dog-side-off" />
        <p>
          Kérjük,
          <strong>ne hozzátok magatokkal házi kedvenceiteket</strong>
          - kutyát, macskát, és egyéb háziállatot.
          <br />
          Krisna-völgyben a természetes élővilág megmentésén, visszatelepítésén dolgozunk. Arborétum
          létrehozásával számos védett madárfajnak teremtettünk megfelelő otthont, és ezért is nem
          engedjük be pl. a kutyákat, hogy ezt a természetes békés élővilágot ne zavarhassák meg.
        </p>
      </li>
      <li>
        <Icon name="material-symbols:smoke-free" />
        <p>
          Kérjük, hogy Krisna-völgy területén
          <strong>ne dohányozzatok</strong>
          , erre a célra a főbejárat előtt van kijelölt hely.
        </p>
      </li>
      <li>
        <Icon name="ph:person-simple-swim" />
        <p>
          Kérjük, hogy a tavakban
          <strong>ne fürödjetek</strong>
          .
        </p>
      </li>
      <li>
        <Icon name="tabler:plant-2-off" />
        <p>
          Kérjük, hogy
          <strong>ne szemeteljetek</strong>
          a területen, az állatokat ne etessétek, és a virágokat, növényeket ne szedjetek le.
        </p>
      </li>
    </ul>
    <p>
      Köszönjük a megértéseteket és reméljük, hogy kellemes pillanatokat szereztek majd a
      Krisna-völgyi látogatással!
    </p>

    <Divider />

    <h3>Érdekelhet még</h3>
    <ul>
      <li>
        <NuxtLink to="/programok">Programjaink</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  li {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0.5em 0;
  }
  p {
    margin: 0;
  }
  span {
    font-size: 3rem;
  }

  @media screen and (min-width: 42rem) {
    li span {
      display: block;
      margin: 0 auto;
    }
  }
</style>
