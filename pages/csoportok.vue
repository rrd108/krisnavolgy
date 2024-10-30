<script setup></script>

<template>
  <h1><Icon name="lucide:tickets" /> Csoport jegyárak</h1>

  <NuxtLink
    to="https://forms.gle/dq2TXtnh4iCQAVLV7"
    class="button center"
    target="_blank"
  >
    Jelentkezési lap
  </NuxtLink>
  <InfoBlock>
    Jelentkezési lap leadási határideje: érkezési dátum előtt minimum
    <strong>10 nappal</strong>.<br />
    Csoport program <strong>15 főtől</strong> rendelhető!
  </InfoBlock>

  <Divider />

  <h3>Szentély látogatás</h3>
  <p>
    Vendégvezetőnk fogadja az érkező csoportot a templom főépületében, majd egy
    rövid tájékoztató következik Krisna-völgy létrejöttéről, az önfenntartó
    faluközösségünk működéséről és mindennapi életünkről. Vendégeink
    megtekinthetik az Európában egyedülálló, lenyűgöző indiai szentélyt, ahol
    színes festmények és az impozáns főoltár fogadja Önöket, és vallásunk
    alapjaiba is betekintést nyerhetnek.
  </p>
  <ul>
    <li>
      <Icon name="material-symbols:info" /> Minden csoport program tartalmazza
    </li>
    <li><Icon name="material-symbols:schedule" /> 45 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> Teljes árú: 3.400 Ft/fő</li>
    <li>
      <Icon name="hugeicons:coins-euro" /> Kedvezményes (gyerek, nyugdíjas):
      2.300 Ft/fő
    </li>
  </ul>

  <Divider />

  <h2>Választható plusz csoport programok</h2>
  <p>
    Minden választott program <strong>1.000 Ft / fő</strong> A programok hossza
    kb 30-40 perc Maximum <strong>2 program választható</strong> az alap
    szentélylátogatáshoz.
  </p>

  <InfoBlock>
    Az alábbi napokon egyéb események miatt
    <strong>nem választható</strong> plusz csoportprogram:
    <ul>
      <li v-for="event in allComingEvents" :key="event.title">
        {{ event.start_date }} ({{ event.title }})
      </li>
    </ul>
  </InfoBlock>

  <h3>Csoport programok</h3>
  <ol>
    <li><NuxtLink :to="{ hash: '#zene-varazsa' }">Zene varázsa</NuxtLink></li>
    <li><NuxtLink :to="{ hash: '#kelet-divatja' }">Kelet divatja</NuxtLink></li>
    <li><NuxtLink :to="{ hash: '#lelek-hangja' }">Lélek hangja</NuxtLink></li>
    <li>
      <NuxtLink :to="{ hash: '#egzotikus-fuszerkalauz' }"
        >Egzotikus fűszerkalauz</NuxtLink
      >
    </li>
    <li><NuxtLink :to="{ hash: '#eletmod-seta' }">Életmód séta</NuxtLink></li>
    <li>
      <NuxtLink :to="{ hash: '#szerencsehozo-zarandokkort' }"
        >Szerencsehozó zarándokkörút</NuxtLink
      >
    </li>
    <li><NuxtLink :to="{ hash: '#korseta' }">Körséta</NuxtLink></li>
    <li>
      <NuxtLink :to="{ hash: '#vallabhi-korseta' }"
        >Körséta Vallabhival</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ hash: '#ismerd-meg-krisna-volgyet' }"
        >Ismerd meg Krisna-völgyet - kvízjáték Vallabhival (min 20 fő)</NuxtLink
      >
    </li>
    <li><NuxtLink :to="{ hash: '#okros-malom' }">Ökrös malom</NuxtLink></li>
  </ol>

  <Divider />

  <h3 id="zene-varazsa">Zene varázsa</h3>
  <p>
    Különleges hangszerek, felejthetetlen élmény... Ismerd meg és próbáld ki az
    <strong>indiai hangszereket</strong>! Érezd a zenét,
    <strong>táncolj</strong> velünk! Láttál már indiai agyagdobot, vagyis
    mrdangát? Tudtad, hogy évezredek óta pontosan ugyanilyen dobon játszanak
    India ősi templomaiban? A "Zene varázsa" programunk keretében többek között
    ezt a tradicionális hangszert is megszólaltatjuk, sőt, vendégeink a karatala
    nevű hangszert maguk is kipróbálhatják! A lelki kultúra alapját képező közös
    tánc és ének életre kel, megtapasztalt spirituális élménnyé válik ebben a
    választható csoportprogramban. Garantáltan felszabadító, közösségépítő és
    egyben szórakoztató is. Vendégeink nem csak passzív hallgatók, hanem
    résztvevői is a muzsikának, sőt mi több, a bátrabbak egy könnyű tánclépést
    is elsajátíthatnak a zenei bemutató után!
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="kelet-divatja">Kelet divatja</h3>
  <p>
    Indiai ruhák mesés világa... Melyik nő ne vágyna rá, hogy legalább egy
    napra, vagy pár órára hercegnő lehessen? Nálunk ez az álmod is valóra
    válhat! Egy 5 méteres lágy, finoman hímzett selyemszáriban mindjárt másképp
    érzi magát az ember. Próbáld fel, és hagyd, hogy elvarázsoljon! A modern,
    nyugati élet zajából kiszakadva az időtlen kelet nyugalmában érezheted
    magad, a szépség, a színek és az elegancia teljes összhangját kínáló indiai
    öltözékekben. A férfiak természetesen turbánt kapnak, hogy végül a közös
    fotón ne maradjanak el (annyira) a hölgyek mellett...
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="lelek-hangja">Lélek hangja</h3>
  <p>
    Feltöltődés a béke szigetén… Fedezd fel a Haré Krisna mantra békéjét!
    Tapasztald meg a mantrameditáció pozitív hatását! Túlhajszolt, stresszes,
    fogyasztói világunkban egyre inkább vágyódunk az ellazulásra, elmélyülésre,
    önmagunk megismerésére. Ha egy igazán értékes kincsre vágysz, válaszd a
    "Lélek hangja" programunkat, amely során feltárjuk Krisna-völgy igazi
    titkát! Milyen lelki gyakorlatokat követünk? Mi a békénk és boldogságunk
    alapja? Hogyan tudunk mindig kapcsolódni Istenhez? Mi a mantra-meditáció?
    Melyik mantra a leghatásosabb felgyorsult világunkban, és miért? E
    programunk során ehhez hasonló kérdésekre kaphatsz választ és egy igazi,
    egész életed során alkalmazható gyakorlati tudást tehetsz magadévá, mely
    garantáltan segíteni fog az életed minden területén.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="egzotikus-fuszerkalauz">Egzotikus fűszerkalauz</h3>
  <p>
    Keleti ízek kavalkádja... Ha valaki már járt Indiában, vagy indiai
    étteremben, megtapasztalhatta a levegő fűszerektől elnehezült bódulatát.
    Méltán tartják India konyhaművészetét a világ legszínesebb és
    legváltozatosabb étkezési kultúrájának, amellett, hogy alapvetően
    vegetáriánus. Híresek a levesek, rizsek, lepénykenyerek, szemet
    gyönyörködtető édességek, csemegék, italok, csatnik és különféle ízes
    főételeik. Mi a titok? A sok aromás fűszer, melynek különleges pirításával
    kezdik a főzést. A program során elmeséljük a különféle keleti fűszerek
    felhasználásának módjait és az egészségre gyakorolt hatásait.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="eletmod-seta">Életmód séta</h3>
  <p>
    Érdekel a Krisna-völgyi élet? Szeretnél bepillantani egy ökofalu
    hétköznapjaiba? Az „Életmód séta” keretében a csoportod vezetőnk kíséretében
    besétálhat Krisna-völgy lakóövezetébe, amely más esetben vendégek számára
    nem látogatható. Így lehetőséget biztosítunk minden érdeklődő számára, hogy
    a völgy mindennapjait, az itt élők életterét, szokásait akár háztartási
    praktikáit, életmódját is megismerhessék. Minden kérdésre szívesen
    válaszolunk. Ismerj meg egy ma már alternatívnak nevezett életformát, amely
    talán nem is áll olyan távol a gyökereinktől, és nem is haszontalan az
    emberiség számára a mai, nyugati mintákat követő és oly sok válsággal küzdő
    modern élet sodrásában.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="szerencsehozo-zarandokkort">Szerencsehozó zarándokkörút</h3>
  <p>
    Gondoltál már rá, milyen jó lenne elmenni a messzi Indiába, esetleg a
    Himalájába egy igazi zarándoklatra? Milyen csodálatos lenne látni a szent
    templomokat és erdőket, ahol a jógik meditálnak évezredek óta? Ezt akár
    nálunk is megteheted! Krisna-völgy nem csak egy ökofalu, de ismert
    zarándokhely is. A Védikus Szentírások bölcselete szerint ugyanis
    lemondásainkkal, lelki gyakorlatainkkal, tiszta életmódunkkal és főleg
    Isten, Krisna szent neveinek éneklésével nem csak önmagunkat, hanem az
    életterünket is megtisztíthatjuk. Az immár 30 éves Krisna-völgy az Indiában
    található Vrindávana nevű szent város, az Úr Krisna földi megjelenési
    helyének mintájára épült. A több, mint 5000 éves szanszkrit írásokban
    lejegyzett fontos események helyszínének emléket állító vörös pavilonok
    Krisna-völgy igazi jellegzetességei. A Szerencsehozó zarándoklat során
    ezekre a helyszínekre kalauzoljuk el vendégeinket, akik minden egyes
    helyszínen tanulnak valamit, és ezáltal áldásokat is gyűjtenek, mint egy
    valódi zarándoklat során. A helyszínek mind varázslatosak. A séta során
    bebarangoljuk a völgy tavacskákkal, pavilonokkal díszített, parkosított
    zegzugos tájait. Készen állsz egy lelki kalandra?
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="korseta">Körséta</h3>
  <p>
    Leginkább az önellátás iránti érdeklődésed hozott el hozzánk? Nagyszerű!
    Neked találtuk ki ezt a szabadtéri körsétát, amely során útba ejtjük a
    tehenészetet, a járgányházat, a terménytároló pincét és a zöldségkertet is.
    Sok mindent megtudhatsz az ökrös földművelésről, az Európában egyedülálló,
    ökrök által hajtott malmunkról, a vegyszermentes biogazdálkodásról, a
    zöldségek-gyümölcsök tárolásáról, felhasználásáról, és bármiről, ami ezzel
    kapcsolatban érdekel. Sőt, ha szeretnél elmélyülni a biokertészkedés vagy az
    állatbarát tehenészkedés rejtelmeiben, akár önkéntesnek is eljöhetsz hozzánk
    hosszabb időre. A témáról egy 3 részes könyvsorozatunk is megjelent, amelyet
    az ajándékboltunkban megvásárolhatsz, tanfolyamainkról pedig a weboldalunkon
    és a helyszínen is érdeklődhetsz.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="vallabhi-korseta">Körséta Vallabhival</h3>
  <p>
    Lehet, hogy éppen Vallabhitól hallottál először Krisna-völgyről? Ha
    szeretnél vele élőben is találkozni, választhatod őt körbevezetődnek.
    Vallabhi-kanta Dászi 14 éve Krisna-völgy lakója, aki jónéhány éve
    valószínűleg az internet világában az egyik legismertebb Krisna-hívő. A
    vendégek körbevezetésében szintén járatos, a környezetbarát és
    Isten-központú élet pedig kifejezetten szívügye, ezért nagyon szeret mesélni
    is ezekről. Természetesen a kérdéseiteket is szívesen fogadja, és ha zenés
    programot is kértek, még együtt is énekelhettek vele. Főleg diákoknak
    ajánljuk ezt a különleges programlehetőséget, amely során Vallabhi mutatja
    meg az ökofalu legfontosabb helyszíneit.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="ismerd-meg-krisna-volgyet">
    Ismerd meg Krisna-völgyet - kvízjáték Vallabhival (min 20 fő)
  </h3>
  <p>
    Ezt a vidám programot kifejezetten diákok részére állítottuk össze.
    Garantáltan szórakoztató és nagyon tanulságos is egyben. A csoport tagjai
    kisebb csapatokra oszlanak, s így teljesítik majd a különféle feladatokat,
    amelyekhez ügyességüket, okosságukat és leleményességüket is latba kell majd
    vetniük. A győztes csapat nyereményben részesül. A játékot Vallabhi-kanta
    dolgozta ki, és ő is vezeti.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3 id="okros-malom">Ökrös malom</h3>
  <p>
    A program egy élő bemutató az ökrös szárazmalomban, mely alatt
    megismerkedhetsz a malom történetével, és láthatod azt működés közben is.
    Ismerd meg az ökrökkel működtetett gépek hagyományos technológiáját, mely
    teljesen környezetbarát, karbonsemleges és egyedülálló egész Európában.
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> 35 perc</li>
    <li><Icon name="hugeicons:coins-euro" /> 1.000 Ft/fő</li>
  </ul>

  <Divider />

  <h3>Különleges csoportok</h3>
  <p>
    Egyéni kívánság szerinti programok: Papp Krisztina (Kundalata Dévi Dászi)
    +36 (30) 43 63 900; e-mail:
    <a href="mailto:csoport@krisnavolgy.hu">csoport@krisnavolgy.hu</a>
  </p>
  <ul>
    <li><Icon name="material-symbols:schedule" /> megbeszélés szerint</li>
    <li><Icon name="hugeicons:coins-euro" /> megbeszélés szerint</li>
  </ul>

  <Divider />

  <h3>Elvonulások</h3>
  <p>Elvonulásainkon lehetőség van egyénileg és csoportosan is részt venni.</p>
  <ul>
    <li>
      <NuxtLink to="https://elvonulas.krisnavolgy.hu">Információk itt</NuxtLink>
    </li>
  </ul>

  <NuxtLink
    to="https://forms.gle/dq2TXtnh4iCQAVLV7"
    class="button center"
    target="_blank"
  >
    Jelentkezési lap
  </NuxtLink>

  <h2>Csoport kedvezmények</h2>
  <ul>
    <li>20 fő feletti csoportok esetében a belépőjegy 1 főnek ingyenes!</li>
    <li>40 fő feletti csoportok esetében a belépőjegy 2 főnek ingyenes!</li>
  </ul>

  <br />
  <InfoBlock>
    Mára már hagyománnyá vált, hogy a Krisna-völgybe látogató csoportok
    valamilyen ajándékot hoznak Krisnának - azaz Istennek,
    <strong>pár szál virágot vagy néhány szem gyümölcsöt</strong>. Ez az ajándék
    még értékesebb, ha esetleg a vendégek saját kertjéből származik.
  </InfoBlock>
</template>

<style scoped>
hr {
  margin-top: 5em;
}
ul {
  margin-left: 1em;
}
</style>
