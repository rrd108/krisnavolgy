<script setup></script>

<template>
  <h1><Icon name="ic:sharp-restaurant-menu" /> Govinda Étterem</h1>

  <NuxtImg
    src="/images/kiraly-menu.jpg"
    alt="Királyi menü"
    sizes="sm:90vw md:90vw lg:90vw"
  />

  <p>
    Fenséges, ajurvédikus, <strong>vegán és vegetáriánus</strong> ebéd, italok,
    desszertek. A menü szezonális, vegyszermentes Krisna-völgyi zöldségek és
    gabonafélék felhasználásával készül tele valódi vitaminokkal és ásványi
    anyagokkal. Különlegesség a helyi tehenészetből származó ahimsa
    (erőszakmentes) és tejtermékek megjelenése a napi kínálatunkban.
  </p>

  <Divider />

  <h3>Nyitvatartás</h3>
  <ul>
    <li>
      <Icon name="material-symbols:schedule" /> május 1. - szeptember 30.
      között: kedd - vasárnap, 12:30 - 16:00
    </li>
    <li>
      <Icon name="material-symbols:schedule" /> október 1. - április 30. között:
      szombat, vasárnap 12:30 - 16:00, hétköznap csoportoknak előzetes egyeztetés szerint!
    </li>
  </ul>

  <Divider />

  <h3>Fizetés</h3>
  <ul>
    <li><Icon name="mdi:cash" /> készpénz</li>
    <li><Icon name="f7:creditcard" /> bankkártya</li>
    <li><Icon name="solar:card-recive-broken" /> SZÉP kártya</li>
  </ul>

  <p>Kóstolj bele Te is Krisna-völgyi terményeink ízvarázsába!</p>

        <Divider />

    <h3>Érdekelhet még</h3>
    <ul>
      <li>
        <NuxtLink to="/rolunk">Rólunk</NuxtLink>
      </li>
    </ul>

</template>

<style scoped></style>
