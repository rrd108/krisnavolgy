export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const data = await readBody(event)

    const allowedFields = ['posted']
    const updates: string[] = []


    allowedFields.forEach(field => {
        if (field in data && data[field] != undefined && data[field] != null) {
            if (field === 'posted') {
                updates.push(`posted = '${getSqlDate()}'`)
            }
            //updates.push(`${field} = '${data[field]}'`)
        }
    })

    if (updates.length === 0) {
        throw createError({
            statusCode: 400,
            message: 'No valid fields to update',
        })
    }

    const result = await db.sql`
        UPDATE orders 
        SET {${updates.join(', ')}}
        WHERE id = ${data.id}`

    return result
})
