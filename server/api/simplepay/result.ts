import { getPaymentResponse } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    const { r, s } = await readBody(event)

    return getPaymentResponse(r, s)
})
