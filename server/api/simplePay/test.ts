import { startPayment } from '../utils/simplePay'

export default defineEventHandler(async (event) => {

const startNewPayment = async () => {
    try {
        const response = await startPayment({
            orderRef: 'ORDER123',
            total: 1000, // Amount in HUF
            customerEmail: 'customer@example.com',
            invoice: {
                name: 'Customer Name',
                country: 'HU',
                state: 'Budapest',
                city: 'Budapest',
                zip: '1111',
                address: 'Test Street 1',
            },
        })

        console.log(response)
    } catch (error) {
        console.error('Payment initiation failed:', error)
    }
}

startNewPayment()

    return {
        message: 'Payment started',
    }
})
