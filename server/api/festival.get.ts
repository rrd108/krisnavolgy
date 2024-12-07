export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const slug = getQuery(event).slug
    const { rows } = await db.sql`SELECT * FROM festivals WHERE url = ${slug as string}`
    return rows?.[0]
})
