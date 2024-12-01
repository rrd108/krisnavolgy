import crypto from 'crypto'

interface PaymentData {
    orderRef: string
    total: number | string
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

interface SimplePayRequestBody extends Omit<PaymentData, 'total'> {
    total: string
    salt: string
    merchant: string
    sdkVersion: string
    methods: ['CARD']
    timeout: string
    url: string
}

interface SimplePayResponse {
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

const simplepayLogger = (...args: any[]) => {
    if (process.env.SIMPLEPAY_LOGGER != 'true') {
        return
    }
    console.log(...args)
}

const generateSignature = (body: string, merchantKey: string) => {
    const hmac = crypto.createHmac('sha384', merchantKey.trim())
    hmac.update(body, 'utf8')
    return hmac.digest('base64')
}

const checkSignature = (responseText: string, signature: string, merchantKey: string) => signature == generateSignature(responseText, merchantKey)

// escaping slashes for the request body to prevent strange SimplePay API errors (eg Missing Signature)
const prepareRequestBody = (body: SimplePayRequestBody) => JSON.stringify(body).replace(/\//g, '\\/')


const SIMPLEPAY_API_URL = 'https://secure.simplepay.hu/payment/v2'
const SIMPLEPAY_SANDBOX_URL = 'https://sandbox.simplepay.hu/payment/v2/start'
const SDK_VERSION = 'SimplePayV2.1_Rrd_0.1.0'

const startPayment = async (paymentData: PaymentData) => {
    const MERCHANT_KEY = process.env.SIMPLEPAY_MERCHANT_KEY
    const MERCHANT_ID = process.env.SIMPLEPAY_MERCHANT_ID
    const API_URL = process.env.SIMPLEPAY_PRODUCTION == 'true' ? SIMPLEPAY_API_URL : SIMPLEPAY_SANDBOX_URL
    simplepayLogger({ MERCHANT_KEY, MERCHANT_ID, API_URL })

    if (!MERCHANT_KEY || !MERCHANT_ID) {
        throw new Error('Missing SimplePay configuration')
    }

    const requestBody: SimplePayRequestBody = {
        salt: crypto.randomBytes(16).toString('hex'),
        merchant: MERCHANT_ID,
        orderRef: paymentData.orderRef,
        currency: paymentData.currency || 'HUF',
        customerEmail: paymentData.customerEmail,
        language: paymentData.language || 'HU',
        sdkVersion: SDK_VERSION,
        methods: ['CARD'],
        total: String(paymentData.total),
        timeout: new Date(Date.now() + 30 * 60 * 1000)
            .toISOString()
            .replace(/\.\d{3}Z$/, '+00:00'),
        url: process.env.SIMPLEPAY_REDIRECT_URL || 'http://url.to.redirect',
        invoice: paymentData.invoice,
    }

    const bodyString = prepareRequestBody(requestBody)
    const signature = generateSignature(bodyString, MERCHANT_KEY)
    simplepayLogger({ bodyString, signature })

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Signature': signature,
            },
            body: bodyString,
        })

        simplepayLogger({ response })

        if (!response.ok) {
            throw new Error(`SimplePay API error: ${response.status}`)
        }

        const responseSignature = response.headers.get('Signature')
        simplepayLogger({ responseSignature })
        if (!responseSignature) {
            throw new Error('Missing response signature')
        }

        const responseText = await response.text()
        const responseJSON = JSON.parse(responseText) as SimplePayResponse
        simplepayLogger({ responseText, responseJSON })

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
