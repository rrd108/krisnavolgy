<script setup>
  useHead({
    title: 'Egyéni jegyárak'
  })
</script>

<template>
  <h1>
    <Icon name="material-symbols:person" />
    Egyéni jegyárak
  </h1>
  <section>
    <OpenHours />

    <Divider />

    <div class="block">
      <table class="full">
        <thead>
          <tr>
            <th colspan="2">Belépőjegy árak</th>
          </tr>
          <tr>
            <th colspan="2">
              <small>
                Tartalmazza a szentély megtekintését idegenvezetéssel és a birtok (tehénvédelmi
                központ, biokertészet, stb) egyéni bejárását.
              </small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Felnőtt</td>
            <td class="right">3.600 Ft</td>
          </tr>
          <tr>
            <td>Gyerek (6-18 éves)</td>
            <td class="right">2.500 Ft</td>
          </tr>
          <tr>
            <td>Gyerek (6 éves korig)</td>
            <td class="right">Ingyenes</td>
          </tr>
          <tr>
            <td>Nyugdíjas</td>
            <td class="right">2.500 Ft</td>
          </tr>
          <tr>
            <td>Pedagógus</td>
            <td class="right">2.500 Ft</td>
          </tr>
          <tr>
            <td>Fogyatékkal élők</td>
            <td class="right">1.800 Ft</td>
          </tr>
        </tbody>
      </table>

      <table class="full">
        <thead>
          <tr>
            <th colspan="2">Családi kedvezményes belépőjegyek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 Felnőtt + 1 gyerek (6-18 éves)</td>
            <td class="right">8.400 Ft</td>
          </tr>
          <tr>
            <td>2 Felnőtt + 2 gyerek (6-18 éves)</td>
            <td class="right">10.500 Ft</td>
          </tr>
          <tr>
            <td>2 Felnőtt + 3 gyerek (6-18 éves)</td>
            <td class="right">12.000 Ft</td>
          </tr>
        </tbody>
      </table>
    </div>

    <InfoBlock>Az árváltoztatás jogát fenntartjuk!</InfoBlock>

    <Divider />

    <div class="block">
      <div>
        <h3>Fizetés</h3>
        <ul>
          <li>
            <Icon name="mdi:cash" />
            készpénz
          </li>
          <li>
            <Icon name="f7:creditcard" />
            bankkártya
          </li>
          <li>
            <Icon name="solar:card-recive-broken" />
            SZÉP kártya
          </li>
        </ul>
      </div>

      <div>
        <h3>Kedvezmények</h3>
        <ul>
          <li>Kerékpárral érkező vendégeink részére: 10% kedvezmény</li>
        </ul>
      </div>
    </div>

    <Divider />

    <GeneralInfo />

    <Divider />

    <h3>Érdekelhet még</h3>
    <ul>
      <li>
        <NuxtLink to="/csoportok">Csoportoknak szóló ajánlataink</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/programok">Programjaink</NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://elvonulas.krisnavolgy.hu">Elvonulások</NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://vendeghaz.krisnavolgy.hu">Vendégház</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  ul {
    margin-left: 1em;
  }

  @media screen and (min-width: 42rem) {
    .block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }
</style>
