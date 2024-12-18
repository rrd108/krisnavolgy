<script setup>
  useHead({
    title: 'Kapcsolat'
  })
</script>

<template>
  <h1>
    <Icon name="material-symbols:call-log" />
    Kapcsolat
  </h1>

  <h3>Általános turisztikai információ</h3>
  <ul>
    <li>Papp Krisztina ügyvezető</li>
    <li>
      <Icon name="material-symbols:call" />
      30/436-3900
    </li>
    <li>
      <Icon name="material-symbols:alternate-email" />
      <a href="mailto:turizmus@krisnavolgy.hu">turizmus@krisnavolgy.hu</a>
    </li>
    <li>
      <Icon name="material-symbols:location-on" />
      8699 Somogyvámos, Fő utca 38.
    </li>
  </ul>

  <h3>Vendégházak</h3>
  <ul>
    <li>
      <Icon name="material-symbols:call" />
      30/239-9265
    </li>
    <li>
      <Icon name="material-symbols:alternate-email" />
      <a href="mailto:vendeghaz@krisnavolgy.hu">vendeghaz@krisnavolgy.hu</a>
    </li>
    <li>
      <NuxtLink to="https://vendeghaz.krisnavolgy.hu">Online szállásfoglalás</NuxtLink>
    </li>
  </ul>

  <h3>Csoport programok</h3>
  <ul>
    <li>
      Csoportok részére:
      <NuxtLink to="/csoportok">itt</NuxtLink>
    </li>
    <li>
      Elvonulások:
      <NuxtLink to="https://elvonulas.krisnavolgy.hu">itt</NuxtLink>
    </li>
  </ul>

  <h3>Sajtó</h3>
  <ul>
    <li>Fodor Kata</li>
    <li>
      <Icon name="material-symbols:call" />
      30/336-7171
    </li>
    <li>
      <Icon name="material-symbols:alternate-email" />
      <a href="mailto:fodorkata108@1108.cc">fodorkata108@1108.cc</a>
    </li>
  </ul>
</template>

<style scoped></style>
