export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const { rows } = await db.sql`SELECT * FROM orders ORDER BY created_at DESC`
    return rows
})
