<script setup>
  useHead({
    title: 'Csoportok'
  })

  const { allComingFestivals } = await useFestivals()
</script>

<template>
  <h1>
    <Icon name="fa6-solid:people-group" />
    Csoport jegyárak
  </h1>

  <NuxtLink to="https://forms.gle/dq2TXtnh4iCQAVLV7" class="button center" target="_blank">
    Jelentkezési lap
  </NuxtLink>
  <InfoBlock>
    Jelentkezési lap leadási határideje: érkezési dátum előtt minimum
    <strong>10 nappal</strong>
    .
  </InfoBlock>
  <br />
  <InfoBlock>
    Csoport program
    <strong>15 főtől</strong>
    rendelhető!
  </InfoBlock>

  <Divider />

  <h2>Választható plusz csoport programok</h2>
  <ul>
    <li>
      <Icon name="mdi:hand-pointing-right" />
      Minden választott program feláras
      <strong>1.200 - 1.500 Ft / fő</strong>
    </li>
    <li>
      <Icon name="mdi:hand-pointing-right" />
      A programok hossza kb 30-40 perc
    </li>
    <li>
      <Icon name="mdi:hand-pointing-right" />
      Csoportok esetén az
      <strong>alap belépőjegyet</strong>
      is meg kell váltani - ami tartalmazza a szentély megtekintést idegenvezetéssel, illetve a
      birtok egyéni bejárását.
    </li>
    <li>
      <Icon name="mdi:hand-pointing-right" />
      A belépőjegy mellé maximum
      <strong>2 program választható</strong>
    </li>
    <li>
      <Icon name="mdi:hand-pointing-right" />
      Egyedi igény esetén vegye fel velünk a kapcsolatot
      <a href="mailto:csoport@krisnavolgy.hu">csoport@krisnavolgy.hu</a>
    </li>
  </ul>

  <h3>Szentély látogatás</h3>
  <p>
    Vendégvezetőnk fogadja az érkező csoportot a templom főépületében, majd egy rövid tájékoztató
    következik Krisna-völgy létrejöttéről, az önfenntartó faluközösségünk működéséről és mindennapi
    életünkről. Megtekintheted az Európában egyedülálló, lenyűgöző indiai szentélyt, ahol színes
    festmények és az impozáns főoltár fogad, és vallásunk alapjaiba is betekintést nyerhetsz.
  </p>
  <ul>
    <li>
      <Icon name="material-symbols:info" />
      A szentély látogatást minden csoport program tartalmazza
    </li>
    <li>
      <Icon name="material-symbols:schedule" />
      45 perc
    </li>
    <li>
      <Icon name="hugeicons:coins-euro" />
      Teljes árú: 3.600 Ft/fő
    </li>
    <li>
      <Icon name="hugeicons:coins-euro" />
      Kedvezményes (gyerek, nyugdíjas): 2.500 Ft/fő
    </li>
  </ul>

  <h3>Választható csoport programok</h3>
  <ul>
    <li>
      <NuxtLink :to="{ hash: '#zene-varazsa' }">
        <Icon name="material-symbols:music-note" />
        Zene varázsa
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#kelet-divatja' }">
        <Icon name="streamline:shopping-catergories-dress-clothing-dress-skirt-women" />
        Légy hercegnő
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#lelek-hangja' }">
        <Icon name="material-symbols:notifications-active" />
        Lélek hangja
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#egzotikus-fuszerkalauz' }">
        <Icon name="tdesign:chili" />
        Egzotikus fűszerkalauz
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#eletmod-seta' }">
        <Icon name="material-symbols:directions-walk" />
        Életünk Krisna-völgyben
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#szerencsehozo-zarandokkort' }">
        <Icon name="material-symbols:barefoot-outline" />
        Szerencsehozó zarándokkörút
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#korseta' }">
        <Icon name="material-symbols:tour" />
        Körséta
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#vallabhi-korseta' }">
        <Icon name="ic:baseline-tiktok" />
        Körséta Vallabhival
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#ismerd-meg-krisna-volgyet' }">
        <Icon name="material-symbols:quiz" />
        Ismerd meg Krisna-völgyet - kvízjáték Vallabhival (min 20 fő)
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="{ hash: '#okros-malom' }">
        <Icon name="ph:cow" />
        Ökrös malom
      </NuxtLink>
    </li>
  </ul>

  <section>
    <Divider />
    <h3 id="zene-varazsa">
      <Icon name="material-symbols:music-note" />
      Zene varázsa
    </h3>

    <NuxtImg
      src="/images/zene-varazsa.jpg"
      alt="Zene varázsa"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Különleges
      <strong>indiai hangszerek</strong>
      , felejthetetlen élmény... Érezd a zenét,
      <strong>táncolj</strong>
      velünk! A lelki kultúrában oly fontos közös tánc és ének életre kel és spirituális élménnyé
      válik, mely felszabadító, közösségépítő és egyben szórakoztató is. Légy aktív résztvevője a
      muzsikának, sőt mi több, ha bátor vagy, egy könnyű tánclépést is elsajátíthatsz a zenei
      bemutató végén!
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.500 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="kelet-divatja">
      <Icon name="streamline:shopping-catergories-dress-clothing-dress-skirt-women" />
      Légy hercegnő - szári viselet kipróbálása
    </h3>

    <NuxtImg
      src="/images/kelet-divatja.jpg"
      alt="Légy hercegnő"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Indiai ruhák mesés világa... Melyik nő ne vágyna rá, hogy legalább kis időre hercegnő
      lehessen? Nálunk az álmod valóra válhat! Próbáld fel a
      <strong>szárit</strong>
      , és hagyd, hogy elvarázsoljon! Az időtlen kelet nyugalmában érezheted magad, a szépség, a
      színek és az elegancia összhangját kínáló indiai öltözékekben. A férfiak természetesen
      <strong>turbánt</strong>
      kapnak, így a közös fotón stílusos összhangban lesztek.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.200 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="lelek-hangja">
      <Icon name="material-symbols:notifications-active" />
      Lélek hangja
    </h3>

    <NuxtImg
      src="/images/lelek-hangja.jpg"
      alt="Lélek hangja"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Feltöltődés a béke szigetén… Fedezd fel a
      <strong>Haré Krisna mantra</strong>
      békéjét, pozitív hatását! Túlhajszolt, stresszes, fogyasztói világunkban egyre inkább
      vágyódunk az ellazulásra, elmélyülésre, önmagunk megismerésére. Egy igazi, egész életed során
      alkalmazható gyakorlati tudást tehetsz magadévá a mantra meditáció gyakorlásával, mely
      garantáltan segíteni fog az életed minden területén.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.200 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="egzotikus-fuszerkalauz">
      <Icon name="tdesign:chili" />
      Egzotikus fűszerkalauz
    </h3>

    <NuxtImg
      src="/images/fuszerkalauz.jpg"
      alt="Egzotikus fűszerkalauz"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Keleti ízek kavalkádja... Méltán tartják India konyhaművészetét a világ legszínesebb és
      legváltozatosabb étkezési kultúrájának, amellett, hogy alapvetően vegetáriánus. Mi a titok? A
      sok aromás fűszer, melynek különleges pirításával kezdik a főzést. Most elmeséljük neked a
      különféle keleti fűszerek felhasználásának módjait és az egészségre gyakorolt hatásait.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.000 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="eletmod-seta">
      <Icon name="material-symbols:directions-walk" />
      Életünk Krisna-völgyben - séta a lakóövezetben
    </h3>

    <NuxtImg
      src="/images/eletmod-seta.jpg"
      alt="Életünk Krisna-völgyben"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Kíváncsi vagy a Krisna-völgyi életünkre? Szeretnél bepillantani egy
      <strong>ökofalu hétköznapjaiba</strong>
      ? Most besétálhatsz Krisna-völgy lakóházai közé, és mesélünk közben a völgy mindennapjairól,
      az itt élők életteréről, szokásainkról, de akár háztartási praktikákat is megismerhetsz.
      Ismerj meg egy ma már alternatívnak nevezett életformát, amely talán nem is áll olyan távol a
      gyökereinktől, és még talán hasznos is a mai, nyugati mintákat követő és oly sok válsággal
      küzdő modern élet sodrásában.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.200 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="szerencsehozo-zarandokkort">
      <Icon name="material-symbols:barefoot-outline" />
      Szerencsehozó zarándokkörút
    </h3>

    <NuxtImg
      src="/images/szerencsehozo-zarandoklat.jpg"
      alt="Szerencsehozó zarándokkörút"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Gondoltál már rá, milyen jó lenne elmenni a messzi Indiába egy igazi zarándoklatra? Ezt akár
      nálunk is megteheted! Krisna-völgy nem csak egy ökofalu, de ismert
      <strong>zarándokhely</strong>
      is. A Védák szerint lemondással, lelki gyakorlatokkal, tiszta életmóddal és főleg Isten,
      Krisna szent neveinek éneklésével nem csak önmagunkat, hanem az életterünket is
      megtisztíthatjuk. A szent zarándokhelyeknek emléket állító
      <strong>vörös pavilonokhoz</strong>
      kalauzolunk most el, melyek Krisna-völgy igazi jellegzetességei, és közben még tanulhatsz és
      áldásokat is gyűjthetsz, mint egy valódi zarándoklat során. Készen állsz egy lelki kalandra?
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.500 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="korseta">
      <Icon name="material-symbols:tour" />
      Körséta
    </h3>

    <NuxtImg
      src="/images/korseta.jpg"
      alt="Körséta"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Leginkább az
      <strong>önellátás</strong>
      iránti érdeklődésed hozott el hozzánk? Nagyszerű! Neked találtuk ki ezt a sétát, amely során
      útba ejtjük a tehenészetet, a járgányházat, a terménytároló pincét és a zöldségkertet is. Sok
      mindent megtudhatsz az ökrös földművelésről, az Európában egyedülálló, ökrök által hajtott
      malmunkról, a vegyszermentes biogazdálkodásról és terménytárolásról.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.200 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="vallabhi-korseta">
      <Icon name="ic:baseline-tiktok" />
      Körséta Vallabhival
    </h3>

    <NuxtImg
      src="/images/korseta-vallabhival.jpg"
      alt="Körséta Vallabhival"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Lehet, hogy Vallabhitól hallottál először Krisna-völgyről? Ha szeretnél vele élőben is
      találkozni, választhatod őt körbevezetődnek. Vallabhi-kanta Dászi 14 éve Krisna-völgy lakója,
      aki valószínűleg az internet világában az egyik legismertebb Krisna-hívő. Főleg diákoknak
      ajánljuk ezt a különleges programlehetőséget, amely során Vallabhi mutatja meg az ökofalu
      legfontosabb helyszíneit.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.500 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="ismerd-meg-krisna-volgyet">
      <Icon name="material-symbols:quiz" />
      Ismerd meg Krisna-völgyet - kvízjáték Vallabhival (min 20 fő)
    </h3>

    <NuxtImg
      src="/images/kviz-jatek.jpg"
      alt="Kvízjáték Vallabhival"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      Ezt a vidám programot kifejezetten diákok részére állítottuk össze. Garantáltan szórakoztató
      és nagyon tanulságos, miközben a csapatok a feladatok miközben az ügyességet, okosságot és
      leleményességet is latba vetik. A győztes csapat nyereményben részesül. A játékot
      Vallabhi-kanta dolgozta ki, és ő is vezeti.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.500 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3 id="okros-malom">
      <Icon name="ph:cow" />
      Ökrös malom
    </h3>

    <NuxtImg
      src="/images/okros-malom.jpg"
      alt="Ökrös malom"
      sizes="sm:90vw md:90vw lg:50vw"
      class="center"
    />

    <p>
      A program egy élő bemutató az ökrös szárazmalomban, mely alatt megismerkedhetsz a malom
      történetével, és láthatod azt működés közben is. Ismerd meg az ökrökkel működtetett gépek
      hagyományos technológiáját, mely teljesen környezetbarát, karbonsemleges és egyedülálló egész
      Európában.
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        35 perc
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        1.500 Ft/fő
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3>Különleges kínálatok - egyedi igények szerint</h3>
    <p>
      Egyéni kívánságod szerinti programokért keress minket: Papp Krisztina (Kundalata Dévi Dászi)
      +36 (30) 43 63 900; e-mail:
      <a href="mailto:csoport@krisnavolgy.hu">csoport@krisnavolgy.hu</a>
    </p>
    <ul>
      <li>
        <Icon name="material-symbols:schedule" />
        megbeszélés szerint
      </li>
      <li>
        <Icon name="hugeicons:coins-euro" />
        megbeszélés szerint
      </li>
    </ul>
  </section>

  <section>
    <Divider />
    <h3>Elvonulások (4-10 fő közötti csoportok részére)</h3>
    <p>Elvonulásainkon lehetőség van egyénileg és csoportosan is részt venni.</p>
    <ul>
      <li>
        <NuxtLink to="https://elvonulas.krisnavolgy.hu">Információk itt</NuxtLink>
      </li>
    </ul>
  </section>

  <Divider />

  <NuxtLink to="https://forms.gle/dq2TXtnh4iCQAVLV7" class="button center" target="_blank">
    Jelentkezési lap
  </NuxtLink>

  <h2>Csoport kedvezmények</h2>
  <ul>
    <li>20 fő feletti csoportok esetében a belépőjegy 1 főnek ingyenes!</li>
    <li>40 fő feletti csoportok esetében a belépőjegy 2 főnek ingyenes!</li>
  </ul>

  <br />
  <InfoBlock>
    Mára már hagyománnyá vált, hogy a Krisna-völgybe látogató csoportok valamilyen ajándékot hoznak
    Krisnának - azaz Istennek,
    <strong>pár szál virágot vagy néhány szem gyümölcsöt</strong>
    . Ez az ajándék még értékesebb, ha esetleg a saját kertetekből származik.
  </InfoBlock>

  <Divider />

  <InfoBlock>
    Az alábbi napokon egyéb események miatt
    <strong>nem választható</strong>
    plusz csoportprogram:
    <ul>
      <li v-for="festival in allComingFestivals" :key="festival.title">
        {{ festival.start_date }} ({{ festival.title.trim() }})
      </li>
    </ul>
  </InfoBlock>

  <Divider />

  <h3>Érdekelhet még</h3>
  <ul>
    <li>
      <NuxtLink to="/utvonal">Hogyan juttok el hozzánk?</NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://vendeghaz.krisnavolgy.hu">Vendégház</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    margin-left: 1em;
  }
</style>
