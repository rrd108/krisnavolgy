<script setup lang="ts">
  const { r, s } = useRoute().query
  const data = await $fetch('/api/simplepay/result', { method: 'POST', body: { r, s } })
</script>

<template>
  <h1>TODO Result</h1>
  <InfoBlock v-if="data.event == 'SUCCESS'">
    <h3>Sikeres fizetés</h3>
    <h4>SimplePay tranzakció azonosító: {{ data.transactionId }}</h4>
    <h4>Rendelési azonosító: {{ data.orderRef }}</h4>
  </InfoBlock>

  <InfoBlock v-if="data.event == 'FAIL'">
    <h3>Sikertelen fizetés</h3>
    <h4>SimplePay tranzakció azonosító: {{ data.transactionId }}</h4>
    <p>Az összeg nem jutott el hozzánk.</p>
    <p>
      Kérjük, ellenőrizzd a tranzakció során megadott adatok helyességét. Amennyiben minden adatot
      helyesen adtál meg, a visszautasítás okának kivizsgálása érdekében kérjük, lépj kapcsolatba a
      kártyakibocsátó bankoddal.
    </p>
    <h4>Rendelési azonosító: {{ data.orderRef }}</h4>
  </InfoBlock>

  <InfoBlock v-if="data.event == 'CANCEL'">
    <h3>Megszakított fizetés</h3>
    <p>Az összeg nem jutott el hozzánk.</p>
    <h4>SimplePay tranzakció azonosító: {{ data.transactionId }}</h4>
    <h4>Rendelési azonosító: {{ data.orderRef }}</h4>
  </InfoBlock>

  <InfoBlock v-if="data.event == 'TIMEOUT'">
    <h3>Időtúllépés</h3>
    <p>Az összeg nem jutott el hozzánk.</p>
    <h4>SimplePay tranzakció azonosító: {{ data.transactionId }}</h4>
    <h4>Rendelési azonosító: {{ data.orderRef }}</h4>
  </InfoBlock>
</template>

<style scoped></style>
