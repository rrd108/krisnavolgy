export default defineEventHandler(async (event) => {

const startNewPayment = async () => {
    try {
        const response = await startPayment({
            orderRef: 'ORDER124',
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

        return response
    } catch (error) {
        console.error('Payment initiation failed:', error)
    }
    }

    const response = await startNewPayment()
    return response
})
