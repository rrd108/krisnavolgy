export default defineEventHandler(async (event) => {
    /*const merchantKey = 'FxDa5w314kLlNseq2sKuVwaqZshZT5d6'
    const body = {
        salt: 'c1ca1d0e9fc2323b3dda7cf145e36f5e',
        merchant: 'PUBLICTESTHUF',
        orderRef: '101010516348232058105',
        currency: 'HUF',
        customerEmail: 'sdk_test@otpmobil.com',
        language: 'HU',
        sdkVersion: 'SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e',
        methods: ['CARD'],
        total: '25',
        timeout: '2021-10-30T12:30:11+00:00',
        url: 'https://sdk.simplepay.hu/back.php',
    }
    let bodyString = JSON.stringify(body)
    bodyString = bodyString.replace(/\//g, '\\/')
    const signature = generateSignature(bodyString, merchantKey)
    // const expectedSignature = 'gcDJ8J7TyT1rC/Ygj/8CihXaLwniMWRav09QSEMQUnv5TbYaEDvQAuBE1mW3plvZ'
    return signature*/

    /*const merchantKey = 'FxDa5w314kLlNseq2sKuVwaqZshZT5d6'
    const body = {
        "salt": "126dac8a12693a6475c7c24143024ef8",
        "merchant": "PUBLICTESTHUF",
        "orderRef": "101010515680292482600",
        "currency": "HUF",
        "customerEmail": "sdk_test@otpmobil.com",
        "language": "HU",
        "sdkVersion": "SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e",
        "methods": [
            "CARD"
        ],
        "total": "25",
        "timeout": "2019-09-11T19:14:08+00:00",
        "url": "https://sdk.simplepay.hu/back.php",
        "invoice": {
            "name": "SimplePay V2 Tester",
            "company": "",
            "country": "hu",
            "state": "Budapest",
            "city": "Budapest",
            "zip": "1111",
            "address": "Address 1",
            "address2": "Address 2",
            "phone": "06203164978"
        }
    }
    let bodyString = JSON.stringify(body)
    bodyString = bodyString.replace(/\//g, '\\/')
    console.log(bodyString)
    const signature = generateSignature(bodyString, merchantKey)
    // escaped signature: rV2AffURYaUFMDhZgwN7fYZha0XGFCqsvBlRotCWg4MZ5e/EBZIVU3Vn8yypimPy
    return signature*/

    const merchantKey = 'QnJvDEEj51jdDEa1P125258p8g5gU383'
    const bodyString = '{"transactionId":504228619,"orderRef":"sb-5","merchant":"P085602","timeout":"2024-12-01T16:29:26+01:00","total":1212.0,"paymentUrl":"https://sb-checkout.simplepay.hu/trx/MWCNH2ccaPs1Nih3Ul9MwMHTMOk27gUTxSgqc_mRQhlSie52AR","currency":"HUF","salt":"mavTEq9UCGL7GQrj9eb1Q7iSHeCkhcwa"}'
    const signature = generateSignature(bodyString, merchantKey)
    // escaped signature: 46wXQmpiYtlNaip35eCaxPb9Y/nLtpi98Mfj3UW3HHXi/TcIJw2n0XpfvHj9zA+i
    // unescaped signature: jMO6cmLF2q5auSCoTJuqyGXQWDBnF8saGsjg7ucsZ12pbIi+qTRnmO8daMQC3tyX
    return signature
})