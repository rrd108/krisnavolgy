import { checkSignature, generateSignature } from "simplepay-js-sdk"

export default defineEventHandler(async (event) => {
    let ipn = await readRawBody(event) || ''
    ipn = ipn.replace(/\n/g, '').replace(/ /g, '')
    
    const signature = getHeader(event, 'signature') || ''
    if (!checkSignature(ipn, signature, process.env.SIMPLEPAY_MERCHANT_KEY || '')) {
        console.log({ ipn, signature, merchantKey: process.env.SIMPLEPAY_MERCHANT_KEY })
        throw new Error('Invalid IPN signature')
    }

    const receiveDate = new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00')
    const response = ipn.replace('}', `,"receiveDate":"${receiveDate}"}`)
    const responseSignature = generateSignature(JSON.stringify(response), process.env.SIMPLEPAY_MERCHANT_KEY || '')
    setResponseHeader(event, 'signature', responseSignature)
    return response
})
