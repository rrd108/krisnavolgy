import { startPayment } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    try {
        const response = await startPayment({
            orderRef: 'sb-23',
            total: 1212,
            customerEmail: 'rrd@webmania.cc',
            invoice: {
                name: 'Radharadhya Dasa',
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
