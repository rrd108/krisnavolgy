import { getPaymentResponse } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    const { r, s } = await readBody(event)
    const response = getPaymentResponse(r, s)
    const db = useDatabase()
    // update order status
    await db.sql`
        UPDATE orders 
        SET status = ${response.event},
            transaction_id = ${String(response.transactionId)},
            modified_at = ${getSqlDate()}
        WHERE id = ${response.orderRef}`

    return response
})
