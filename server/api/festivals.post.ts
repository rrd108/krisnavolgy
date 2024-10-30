export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const data = await readBody(event)

    if (!data.end_date) {
        data.end_date = data.start_date
    }
    
    const result = await db.sql`
        INSERT INTO festivals 
        (title, start_date, end_date, description, long_description, url, thumbnail)
        VALUES (${data.title}, ${data.start_date}, ${data.end_date}, ${data.description}, ${data.long_description}, ${data.url}, ${data.thumbnail})`

    return { result }
})
