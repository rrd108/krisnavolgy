export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const data = await readBody(event)
    
    const allowedFields = ['title', 'start_date', 'end_date', 'description', 'long_description', 'url', 'thumbnail']
    const updates: string[] = []

    allowedFields.forEach(field => {
        if (field in data && data[field] != undefined && data[field] != null) {
            updates.push(`${field} = '${data[field]}'`)
        }
    })

    if (updates.length === 0) {
        throw createError({
            statusCode: 400,
            message: 'No valid fields to update'
        })
    }

    const result = await db.sql`
        UPDATE festivals 
        SET {${updates.join(', ')}}
        WHERE id = ${data.id}`

    return { result }
})
