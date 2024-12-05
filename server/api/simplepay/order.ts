import { startPayment } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    const order = await readBody(event)
    try {
        const response = await startPayment({
            orderRef: Date.now().toString(),
            total: order.total,
            customerEmail: order.email,
            invoice: {
                name: 'Névtelen Vendég',
                country: 'HU',
                state: 'Somogy',
                city: 'Somogyvámos',
                zip: '8699',
                address: 'Sehol u 0',
            },
        })
        
        return response
    } catch (error) {
        console.error('Payment initiation failed:', error)
        return error
    }
})
