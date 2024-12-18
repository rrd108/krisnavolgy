import { checkSignature, generateSignature } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    const ipn = await readRawBody(event) || ''
    const db = useDatabase()
    const ipnJSON = JSON.parse(ipn)

    const merchantKey = 'SIMPLEPAY_MERCHANT_KEY_HUF'
    const signature = getHeader(event, 'signature') || ''
    if (!checkSignature(ipn, signature, process.env[merchantKey] || '')) {
        console.log({ ipn, signature, merchantKey: process.env[merchantKey] })
        throw new Error('Invalid IPN signature')
    }

    await db.sql`
    UPDATE orders SET status = ${ipnJSON.status},
        transaction_id = ${ipnJSON.transactionId},
        modified_at = CURRENT_TIMESTAMP 
    WHERE id = ${ipnJSON.orderRef}`

    const receiveDate = new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00')
    const response = ipn.replace('}', `,"receiveDate":"${receiveDate}"}`)
    const responseSignature = generateSignature(response, process.env[merchantKey] || '')

    setResponseHeader(event, 'signature', responseSignature)
    setResponseHeader(event, 'content-type', 'application/json')
    return response
})
