import { generateSignature } from "simplepay-js-sdk"

export default defineEventHandler(async (event) => {
    const body = {
        salt: 'a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6',
        orderRef: 'rrd-12',
        method: 'CARD',
        merchant: 'PUBLICTESTHUF',
        finishDate: '2024-12-01T22:30:11+00:00',
        paymentDate: '2024-12-01T22:30:11+00:00',
        transactionId: 99844942,
        status: 'FINISHED'
    }
    let bodyString = JSON.stringify(body)
    console.log({bodyString})
    const signature = generateSignature(bodyString, process.env.SIMPLEPAY_MERCHANT_KEY||'')
    return signature
})
