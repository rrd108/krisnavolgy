import { startPayment } from 'simplepay-js-sdk'

export default defineEventHandler(async (event) => {
    const order = await readBody(event)
    const orderRef = Date.now().toString()

    const db = useDatabase()
    const result = await db.sql`
        INSERT INTO orders 
        (id, name, email, address, invoice_name, invoice_tax_number, invoice_zip, invoice_city, invoice_address, ticket, lunch, total)
        VALUES (${orderRef}, ${order.name}, ${order.email}, ${order.address}, ${order.invoice.name}, ${order.invoice.taxNumber}, ${order.invoice.zip}, ${order.invoice.city}, ${order.invoice.address}, ${order.ticket}, ${order.lunch}, ${order.total})`

    if (!result.success) {
        return { error: 'Error saving order to database' }
    }

    try {
        const response = await startPayment({
            orderRef,
            total: order.total,
            customerEmail: order.email,
            invoice: {
                name: order.invoice.name || order.name,
                country: 'HU',
                state: '_',
                city: order.invoice.city || 'Budapest',
                zip: order.invoice.zip || '1234',
                address: order.invoice.address || 'Sehol u 0',
            },
        })

        return response
    } catch (error) {
        console.error('Payment initiation failed:', error)
        return error
    }
})
