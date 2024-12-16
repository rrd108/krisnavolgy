import { GoogleGenerativeAI } from '@google/generative-ai'

export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const id = getQuery(event).id
    const { rows } = await db.sql`SELECT * FROM festivals WHERE id = ${id as number}`
    const festival = rows?.[0]

    if (!festival) {
        throw createError({ statusCode: 404, statusMessage: 'Festival not found' })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `
        ${festival.long_description}
        
        Ez alapján generálj egy max 135 karakterből álló rövid, frappáns leírást a fesztiválra.
        A leírásban ne szerepljen a fesztivál dátuma
    `
    const result = await model.generateContent(prompt)
    return result.response.text()
})
