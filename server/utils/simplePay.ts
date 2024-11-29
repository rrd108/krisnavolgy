/*
Bankkártyás fizetés
a. A vásárló a kereskedő weboldalán összeválogatja a termékeket, ami
eredményeképpen kialakul a fizetendő végösszeg.
b. A tranzakciós adatokat a kereskedő átadja a SimplePay felé az API-n keresztül
(start). Ezen a ponton létrejön a fizetési tranzakció a SimplePay rendszerében.
A kapott adatokra válaszként a rendszer egy URL-t ad vissza. A kereskedő erre
az URL-re kell átirányítsa a vásárlót a böngészőben.
c. A megadott URL-en a SimplePay fizetőoldalra érkezik a vásárló, ahol a
tranzakció korábban megadott adatai jelennek meg. A fizetőoldalon tudja
megadni a vásárló a kártyájának adatait. Ha van a Simple applikációban
regisztrált kártája, akkor azt választva is elvégezheti a fizetést.
d. A kártyaadatok megadása után megtörténik a fizetés banki hitelesítése
(authorizáció).
e. Az authorizáció után a vásárló vissza van irányítva a kereskedő weboldalára
(back). Itt a visszaadott adatok alapján szükséges tájékoztatni a vásárlót az
authorizáció eredményéről.
f. Ezután a háttérben lefut a csalás megfigyelő és megelőző folyamat. Ha ennek
során nem észlel a rendszer semmilyen problémát, akkor a háttérben
visszajelzést küld a weboldal felé (ipn). Ez a fizetési tranzakció vége. Miután az
IPN üzenet megérkezik, teljesítheti a megrendelést a kereskedő.


A v2 API és fizetési folyamat technikailag a következő alapokon nyugszik. Ez minden
hívásnál és válasznál azonos. A továbbiakban minden leírás és mintakód ezen alapul.
Karakterkódolás: UTF-8
Az API üzenetek metódusa: POST
Az API hívásokon kívül a böngészőben történő visszairányítás metódusa GET.
Az aláírások (Signature) HMAC HASH metódusa: SHA384
Az API minden kommunikációban a header-ben várja és küldi az aláírásokat.
Az API minden kommunikációban a http body-ban várja és küldi a tranzakció adatait.
Az adatok formátuma: JSON
A Content-Type minden esetben application/json
A SimplePay tömör (felesleges white-space-ektől mentes) JSON-t ad vissza a
válaszokban és ad át az IPN üzenetben. A kereskedői rendszertől nem elvárt a
tömörség.
Minden időpontot ISO 8601 szabvány szerinti stringként (2018-09-15T11:25:37+02:00) kell
átadni és az API is ebben a formában adja vissza az idő értékeket.
A pénznemet ISO 4217 szabvány szerint (HUF, EUR, USD, stb.) kell átadni.
Az országokat ISO 3166-1 alpha-2 szabvány szerint (HU, GB, DE, stb.) kell átadni.
A nyelveket ISO 639-1 alpha-2 szabvány szerint kell átadni, jelenleg a következők
lehetnek: AR, BG, CS, DE, EN, ES, FR, IT, HR, HU, PL, RO, RU, SK, TR, ZH
Minden kérés és válasz tartalmaz egy "salt" elnevezésű mezőt, aminek a tartalma 32
véletlenszerű karakter. Ennek célja, hogy az üzenet varianciáját és ezzel az aláírás
biztonságát növelje.
Az összeg minden esetben nullánál nagyobb számérték. HUF devizanem esetén egész
szám, EUR és USD esetén két tizedesjegy használható. A tizedes elválasztó pont (.). Ezres
elválasztó nem értelmezhető.
Az API hívások sikertelensége esetén a válasz kiegészül az „errorCodes” tömbbel, ami
tartalmazza a hiba beazonosításához szükséges hibakódokat.
A SimplePay által generált tranzakció azonosító jelenleg 9 számjegyű. Emiatt a
tranzakció adatmezőjének a kereskedői adatbázisban legalább 9 számjegyű érték
tárolására kell alkalmasnak legyen, illetve hosszabb távon gondolkodva érdemesebb
10 számjeggyel kalkulálni

A body-ban küldött üzenet nem tartalmazza az aláírást. Az aláírást az üzenet header-
ben szükséges küldeni "Signature" néven.
A "Signature" alapja az üzenet body (azaz a teljes JSON string). Az aláírás számításhoz
a body-nak az SHA384 HMAC HASH értéke szükséges.
A "Signature" a kapott HASH-nek a Base64 enkódolt kimenete lesz.
A számítás fent leírt logikája az alábbiakban foglalható össze (a függvények és a
szintaxis minden programnyelven mások lehetnek)
signature = codeBase64(hmacWithSha384(merchantKey, message))
Az alábbi tranzakció adatait használjuk mintaként.
{
"salt":"c1ca1d0e9fc2323b3dda7cf145e36f5e",
"merchant":"PUBLICTESTHUF",
"orderRef":"101010516348232058105",
"currency":"HUF",
"customerEmail":"sdk_test@otpmobil.com",
"language":"HU",
"sdkVersion":"SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e",
"methods":["CARD"],
"total":"25",
"timeout":"2021-10-30T12:30:11+00:00",
"url":"https:\/\/sdk.simplepay.hu\/back.php"
}
A lenti minta JSON string (message) és minta kereskedői kulcs (merchantKey)
segítségével az alábbi eredmény (signature) kapható bármilyen programnyelven.
A merchantKey változóhoz a fiókonként egyedi érték a kereskedői vezérlőpulton a
kereskedői fiók technikai beállításai között található meg “SECRET_KEY” néven.
Az alábbi adatokkal való API tesztelésre használatos eszközök esetén (pl.
postman.com) legyen figyelemmel az alábbiakra:
- URL: https://sandbox.simplepay.hu/payment/v2/start
- metódus: POST
- az alábbi, enterek és egyéb formázások nélküli JSON stringet használja a hívás
body-ban
- ügyeljen arra, hogy egy sorba legyen bemásolva a JSON sortörések nélkül
- a header tartalmazza a „Signature” elemet a lenti értékkel
- header „Content-Type” értéke „application/json” legyen
- a tranzakció már sikeresen ki lett fizetve a sandbox rendszeren, ezért a
válaszban hibaüzenet fog megjelenni

body
{"salt":"c1ca1d0e9fc2323b3dda7cf145e36f5e","merchant":"PUBLICTESTHUF","orderRef":"101010516348
232058105","currency":"HUF","customerEmail":"sdk_test@otpmobil.com","language":"HU","sdkVersio
n":"SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e","methods":["C
ARD"],"total":"25","timeout":"2021-10-30T12:30:11+00:00","url":"https:\/\/sdk.simplepay.hu\/ba
ck.php"}
merchantKey
FxDa5w314kLlNseq2sKuVwaqZshZT5d6
Signature
gcDJ8J7TyT1rC/Ygj/8CihXaLwniMWRav09QSEMQUnv5TbYaEDvQAuBE1mW3plvZ
Minden API hívásra adott válasz is tartalmaz aláírást, amit kereskedői oldalon szükséges
ellenőrizni a válasz hitelesítése végett.

3.3
start – bankkártyás fizetési tranzakció létrehozása
A start hívást az API az alábbi URL-en várja:
https://sandbox.simplepay.hu/payment/v2/start
A start a fizetési tranzakció kezdete. Ezen a ponton történik meg a kereskedői
rendszerben összegyűjtött tranzakciós adatok továbbítása a SimplePay felé.
Az adatok között megtalálható a megrendelés globális adatai, a kosár tartalom,
számlázási adatok, szállítási adatok, SimplePay rendszer-specifikus adatok, URL-ek, stb.
A tranzakciós adatokat az “Általános üzenetformátum” fejezetben leírt módon egy
JSON stringben szükséges küldeni, POST metódussal a fent megadott URL-re. A
tranzakció indításához az alábbi adatok szükségesek.
salt: 32 karakter hosszú random string,
merchant: a kereskedői fiók egyedi azonosítója a SimplePay rendszerben.
orderRef: a kereskedői rendszerben egyedi tranzakció azonosító
currency: a tranzakció devizaneme
customerEmail: a vásárló email címe
language: a fizetőoldal nyelve
sdkVersion: a kereskedői rendszerben a fizetés verzió száma
methods: fizetési mód tömbje
total: a tranzakció összege
timeout: a tranzakció érvényességi ideje, amíg a fizetést meg lehet kezdeni
url: redirect URL, ahova a kereskedő szeretné irányítani a vásárlót fizetés után
invoice: tomb a számlázási adatoknak

{
"salt":"126dac8a12693a6475c7c24143024ef8",
"merchant":"PUBLICTESTHUF",
"orderRef":"101010515680292482600",
"currency":"HUF",
"customerEmail":"sdk_test@otpmobil.com",
"language":"HU",
"sdkVersion":"SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e",
"methods":[
"CARD"
],
"total":"25",
"timeout":"2019-09-11T19:14:08+00:00",
"url":"https:\/\/sdk.simplepay.hu\/back.php",
"invoice":{
"name":"SimplePay V2 Tester",
"company":"",
"country":"hu",
"state":"Budapest",
"city":"Budapest",
"zip":"1111",
"address":"Address 1",
"address2":"Address 2",
"phone":"06203164978"
}
}
Az adatokkal feltöltött JSON stringhez az “Üzenetek validálása” fejezetben leírt módon
szükséges az aláírást kiszámolni. A fenti adatokhoz az alábbi Base64 enkódolt HASH
tartozik:
rV2AffURYaUFMDhZgwN7fYZha0XGFCqsvBlRotCWg4MZ5e/EBZIVU3Vn8yypimPy
A kiszámolt aláírást az üzenet fejlécéhez kell adni a “Signature” értékeként.

Content-type: application/json
Signature: rV2AffURYaUFMDhZgwN7fYZha0XGFCqsvBlRotCWg4MZ5e/EBZIVU3Vn8yypimPy
Az üzenet body és header fenti minta szerinti létrehozása után indítható el a tranzakció
POST metódussal a SimplePay „start” interface felé:
https://sandbox.simplepay.hu/payment/v2/start
Minden végpont hívása azonos alapokon nyugszik, azaz az üzenet adatait tartalmazó
JSON string összeállításából és az ehhez tartozó Signature kiszámításából.
A Signature számítása és elküldése minden esetben megegyező módon történik, ezért
a további API hívások esetén ezt külön nem tárgyalja a dokumentáció.

Az erős ügyfélhitelesítésről a 2. mellékletben olvasható további információ.
customerEmail: a vásárló e-mail címe
invoice (számlázási adatok) tömb, ami az alábbi elemeket tartalmazza
name számlázási név
country ország szövegesen megadva
state: megye szövegesen megadva
city: város
zip: irányítószám
address: cím
threeDSReqAuthMethod: (opcionális) a vásárló regisztrációs módja a kereskedői
rendszerben
lehetséges értékek:
01: vendég
02: kereskedőnél regisztrált
05: harmadik feles azonosítóval regisztrált (Google, Facebook, account stb.)
address2: (opcionális) második címsor
phone: (opcionális) telefonszám
A fenti adatokat a SimplePay rendszere továbbítja az fizetés elindításakor. A bank
ezeket figyelembe veszi a tranzakció engedélyezésénél, emiatt a tranzakció
sikeressége érdekében kiemelten fontos a küldésük és az adatok valódisága!
Abban az esetben, ha a kereskedői rendszerben nem ismert a vásárló e-mail adata,
akkor a „maySelectEmail” változó hatására a fizetőoldalon is meg tudja adni ezt a
vásárló.
"maySelectEmail":true,

A 3DS challenge során a kártyakibocsátó bank interaktívan szeretné beazonosítani a
kártya birtokosát az adott tranzakció során.
A folyamatban éles működés esetén SMS-ben küld a bank a kártyatulajdonosnak egy
egyszer használható azonosítót, amit a banki felületen kell megadjon. Ha az azonosító
kód megfelelő, akkor folytatódik a fizetési folyamat.
A sandbox fizetőoldalon szimuláva van a 3DS challenge folyamat. Annak érdekében,
hogy a tranzakció során 3DS challenge történjen a sandbox legördülő kártyalistájából
a 3DS folyamathoz megjelölt kártyát kell kiválasztani a teszt fizetéskor.
Ebben az esetben nem történik meg azonnal a fizetés hanem előbb átirányításra
kerülünk a banki kódbekérő oldal szimulációjára. Az éles működés esetén itt (vagy
ennek megfelelő kártyakibocsátó banki felületen) lehet megadni az SMS-ben kapott
kódot.
A sandbox 3DS Challenge szimuláció esetén NEM küld a rendszer SMS-ben kódot,
hanem két konstans érték megadására van lehetőség:
- 1234 a sikeres teszt folyamathoz
- 1111 a sikertelen teszt folyamathoz

urls: ha nem egy közös URL-en, hanem az eseménynek megfelelő külön helyen
dolgozza fel a kereskedő rendszere az authorizáció eredményét, akkor itt minden
eseményhez külön URL adható meg.
A lehetséges események:
- success: sikeres authorizáció
- fail: sikertelen authorizáció
- cancel: megszakított tranzakció
- timeout: időtúllépés
"urls":{
"success":"https://sdk.simplepay.hu/success.php",
"fail":"https://sdk.simplepay.hu/fail.php",
"cancel":"https://sdk.simplepay.hu/cancel.php",
"timeout":"https://sdk.simplepay.hu/timeout.php"
},
Abban az esetben, ha az „url” és az „urls” is küldve van egy tranzakcióban, akkor a
„url” nem lesz figyelembe véve.

A start hívásra szinkron választ ad vissza a SimplePay rendszere. A válasz header is
tartalmaz Signature értéket. Kereskedői oldalon ezt minden esetben ajánlott ellenőrizni.
A válasz body egy JSON string, ami az alábbiakat tartalmazza:
salt: 32 karakter hosszú random string
merchant: a kereskedő SimplePay fiókja, amiben a tranzakció létrejött
orderRef: a start hívásban megadott orderRef értéke
currency: a start hívásban megadott currency értéke
transactionId: a létrejött SimplePay tranzakció azonosítója
timeout: az időhatár, amíg elindítható a fizetéstotal: a tranzakció összege
paymentUrl: az az URL, ahova a kereskedő rendszerének a vásárlót át kell irányítani,
hogy a fizetést elvégezhesse.

{
"salt":"KAC6ZRUacmQit98nFKOpjXgkwdC0Grzl",
"merchant":"PUBLICTESTHUF",
"orderRef":"101010515680292482600",
"currency":"HUF",
"transactionId":99844942,
"timeout":"2019-09-11T21:14:08+02:00",
"total":25.0,
"paymentUrl":"https://sandbox.simplepay.hu/pay/pay/pspHU/8f4oKRec5R1B696xlxbOcj1jRhhABA2pwS
LQDPW60zoGSDWzDU"
}
A paymentUrl értékét több módon lehet arra használni, hogy a vásárlót a fizetőoldalra
irányítsuk a kereskedői oldalról. Ezek közül a legegyszerűbb egy gomb megjelenítése.
ha a gombot megnyomja a vásárló, akkor megtörténik az átirányítás a fizetőoldalra.
<form action="https://sandbox.simplepay.hu/pay/pay/pspHU/8f4oKRec5R1B696xlxbOcj1jRhhABA2pwSLQD
PW60zoGSDWzDU" method="POST" id="SimplePayForm" accept-charset="UTF-8">
<button type="submit">Start SimplePay Payment</button>
</form>

A fizetőoldalról a böngészőben vissza van irányítva a vásárló a kereskedői weboldalra.
A visszairányítás a start hívásban megadott URL-re történik. Ebből adódóan a “back”
nem az API funkciója, hanem a kereskedői rendszer része, mivel a böngészőben történt
tranzakciónak a vásárló által látható része a kereskedő weboldalán ér véget.
Ez a hívás a böngészőben történik GET metódussal. Az indításkor megadott URL-hez két
változót fűz hozzá a SimplePay rendszere.“r” változó
Az “r” változó (response) a fizetés eredményét és részleteit tartalmazza. A tartalom egy
Base64 enkódolt JSON string.

“s” változó
Az “s” változó (signature) a JSON string aláírása. Az aláírás validálása a böngészőben
történő híváskor ajánlott.
A korábban szemléltetett minta tranzakció esetén az alábbi adatokkal kiegészítve van
vissza irányítva a vásárló a kereskedő oldalán található URL-re. Az URL korábban, a
„start” kommunikáció során lett megadva az „url” változóban, vagy az „urls” egyik
értékében.
https://sdk.simplepay.hu/back.php?r=eyJyIjowLCJ0Ijo5OTg0NDk0MiwiZSI6IlNVQ0NFU1MiLCJtIjoiUFVCTE
lDVEVTVEhVRiIsIm8iOiIxMDEwMTA1MTU2ODAyOTI0ODI2MDAifQ%3D%3D&s=El%2Fnvex9TjgjuORI63gEu5I5miGo4CS
AD5lmEpKIxp7WuVRq6bBeh1QdyEvVGSsi
Az “r” változó tartalma Base64 dekódolás után az alábbi JSON string:

{
"r":0,
"t":99844942,
"e":"SUCCESS",
"m":"PUBLICTESTHUF",
"o":"101010515680292482600"
}
A JSON elemei a következők:
r: válaszkód (response code)
t: tranzakció SimplePay azonosítója (transaction id)
e: esemény (event)
m: kereskedői fiók azonosítója (merchant)
o: kereskedői tranzakció azonosító (order id)
A fizetés négyféle eseménnyel érkezhet vissza a kereskedői oldalra. Ezek nem
feltétlenül azonosak a tranzakció aktuális státuszával:
success: sikeres authorizáció
fail: sikertelen authorizáció
timeout: időtúllépés, ha nem lett a megadott ideig elindítva a fizetés
cancel: megszakított fizetés, bezárt böngésző, elnavigálás a fizetőoldalról
Abban az esetben, ha nem sikeres a fizetés, akkor a válaszkód tartalmazza a probléma
hibakódját.

*/

import crypto from 'crypto'

interface PaymentStartRequest {
    orderRef: string
    total: number
    customerEmail: string
    currency?: string
    language?: string
    invoice?: {
        name: string
        country: string
        state: string
        city: string
        zip: string
        address: string
        address2?: string
        phone?: string
    }
}

interface PaymentStartResponse {
    salt: string
    merchant: string
    orderRef: string
    currency: string
    transactionId: string
    timeout: string
    total: string
    paymentUrl: string
    errorCodes?: string[]
}

const generateSignature = (body: string, merchantKey: string) => {
    const hmac = crypto.createHmac('sha384', merchantKey.trim())
    hmac.update(body, 'utf8')
    return hmac.digest('base64')
}

const checkSignature = (response: string, signature: string, merchantKey: string) => signature == generateSignature(response, merchantKey)


const SIMPLEPAY_API_URL = 'https://secure.simplepay.hu/payment/v2'
const SIMPLEPAY_SANDBOX_URL = 'https://sandbox.simplepay.hu/payment/v2/start'
//const SDK_VERSION = 'SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e'
const SDK_VERSION = 'SimplePayV2.1_Rrd_0.1.0'

const startPayment = async (paymentData: PaymentStartRequest) => {
    const MERCHANT_KEY = process.env.SIMPLEPAY_MERCHANT_KEY
    const MERCHANT_ID = process.env.SIMPLEPAY_MERCHANT_ID
    const API_URL = process.env.SIMPLEPAY_PRODUCTION == 'true' ? SIMPLEPAY_API_URL : SIMPLEPAY_SANDBOX_URL

    if (!MERCHANT_KEY || !MERCHANT_ID) {
        throw new Error('Missing SimplePay configuration')
    }

    const requestBody = {
        salt: crypto.randomBytes(16).toString('hex'),
        merchant: MERCHANT_ID,
        orderRef: paymentData.orderRef,
        currency: paymentData.currency || 'HUF',
        customerEmail: paymentData.customerEmail,
        language: paymentData.language || 'HU',
        sdkVersion: SDK_VERSION,
        methods: ['CARD'],
        total: paymentData.total.toString(),
        timeout: new Date(Date.now() + 30 * 60 * 1000)
            .toISOString()
            .replace(/\.\d{3}Z$/, '+00:00'),
        url: process.env.SIMPLEPAY_REDIRECT_URL,
        invoice: paymentData.invoice,
    }

    const bodyString = JSON.stringify(requestBody)//.replace(/\//g, '\\/')
    const signature = generateSignature(bodyString, MERCHANT_KEY)
    console.log({ bodyString, signature })

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json',
                'Signature': signature,
            },
            body: bodyString,
        })

        if (!response.ok) {
            throw new Error(`SimplePay API error: ${response.status}`)
        }

        const responseData = await response.json() as PaymentStartResponse
        const responseText = await response.text()
        const responseSignature = response.headers.get('Signature')

        console.log({ responseData, responseSignature })

        if (responseData.errorCodes) {
            throw new Error(`SimplePay API error: ${responseData.errorCodes}`)
        }

        // Verify response signature
        const calculatedResponseSignature = generateSignature(responseText, MERCHANT_KEY)
        console.log({ calculatedResponseSignature })
        if (responseSignature !== calculatedResponseSignature) {
            throw new Error('Invalid response signature')
        }

        return responseData
    } catch (error) {
        console.error('SimplePay payment start error:', error)
        throw error
    }
}

export { startPayment, generateSignature, checkSignature }
