export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const id = getQuery(event).id as string
    const result = await db.sql`DELETE FROM festivals WHERE id = ${id}`
    return { result }
})
