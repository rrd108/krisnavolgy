export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const data = await readBody(event)

    const result = await db.sql`DELETE FROM festivals WHERE id = ${data.id}`
    return { result }
});