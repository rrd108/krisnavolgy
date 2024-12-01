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

const generateSignature = (body: string | JSON, merchantKey: string) => {
    console.log(`👉 generateSignature called with ${typeof body} body`)
    if (typeof body === 'object') {
        body = JSON.stringify(body)
        body = body.replace(/\//g, '\\/')
    }
    const hmac = crypto.createHmac('sha384', merchantKey.trim())
    hmac.update(body, 'utf8')
    return hmac.digest('base64')
}

const checkSignature = (responseText: string, signature: string, merchantKey: string) => signature == generateSignature(responseText, merchantKey)


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

    const bodyString = JSON.stringify(requestBody).replace(/\//g, '\\/')    // TODO move out replace
    const signature = generateSignature(bodyString, MERCHANT_KEY)
    console.log(75)
    console.log({ bodyString })
    console.log({ MERCHANT_KEY })
    console.log({ signature })

    try {
        console.log(API_URL)
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Signature': signature,
            },
            body: bodyString,
        })

        console.log(96, { response })

        if (!response.ok) {
            throw new Error(`SimplePay API error: ${response.status}`)
        }

        const responseSignature = response.headers.get('Signature')
        console.log({ responseSignature })
        if (!responseSignature) {
            throw new Error('Missing response signature')
        }

        const responseText = await response.text()
        console.log({ responseText })
        const responseJSON = JSON.parse(responseText) as PaymentStartResponse
        console.log({ responseJSON })

        if (responseJSON.errorCodes) {
            throw new Error(`SimplePay API error: ${responseJSON.errorCodes}`)
        }

        if (!checkSignature(responseText, responseSignature, MERCHANT_KEY)) {
            throw new Error('Invalid response signature')
        }

        return responseJSON
    } catch (error) {
        console.error('SimplePay payment start error:', error)
        throw error
    }
}

export { startPayment, generateSignature, checkSignature }
