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
          <li>Kerékpárral érkező vendégeinknek részére: 10% kedvezmény</li>
        </ul>
      </div>
    </div>

    <Divider />

    <h3>Jegypénztár</h3>
    <p>
      A recepciónál a
      <strong>parkolás ingyenes</strong>
      !
    </p>
    <p>
      A belépőjegyet Krisna-völgy bejáratánál, az elefántoknál elhelyezkedő recepción válthatjátok
      meg minden nap 10 és 17 óra között. Amennyiben a recepció zárva van, a belépőjegy a szentély
      épületében váltható meg látogatási időn belül.
    </p>
    <p>
      A recepciónál a nyári hónapokban egy Krisna-völgyi termékbolt is található, ahol helyi
      szörpöket is kóstolhattok.
    </p>
    <p>
      Krisna-völgy főépületéhez egy kb
      <strong>800 méteres sétaút</strong>
      vezet (kb 10 -15 perc séta). Itt található az indiai szentély, a Govinda vegetáriánus és vegán
      étterem, az indiai ajándékbolt és a mosdók. Az indiai szentélyben minden egész órában indul
      egy kb 40 perces vendégvezetés. A vendégvezető a szentélyben látottak mellett röviden
      Krisna-völgy általános életmódjáról és kulturális szokásairól is ismeretterjesztő előadást
      tart. Első körbevezetés 11:00-kor, az utolsó körbevezetés 17:00-kot indul.
    </p>
    <p>
      Szabadtéri programként ajánljuk, hogy látogass el a tehénvédelmi központba, sétálj a dísztavak
      és pihenő pavilonok mentén, menj át a bambusz alagúton, és látogass el a biokertészeti
      egységeinkbe is, hogy szemtanúja lehess az önellátás és a természetközeli élet mindennapi
      csodáinak! A kültéri látogatást tanösvénytáblák segítik, egészen az elefántoktól a szentély
      épületéig.
    </p>

    <p>Szeretettel várunk Krisna-völgyben!</p>
    <p>(Az árváltoztatás jogát fenntartjuk!)</p>

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
