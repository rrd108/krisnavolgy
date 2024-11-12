const LIST_ID = '20fdc26fb9'

export default defineEventHandler(async (event) => {
    const { email } = await readBody(event)
    const response = await fetch(`${process.env.MAILCHIMP_API_URL}/lists/${LIST_ID}/members`, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`api:${process.env.MAILCHIMP_API_KEY}`),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
        }),  
    })

    return response.json()
})
