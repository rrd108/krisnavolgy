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
        
        Ez alapján generálj 3 ötletet, amelyek a fesztiválra jellemző képeket mutatják be. Nem képet kell generálni, hanem leírásokat, hogy mi szerepljen a képen, milyen tárgyak, emberek, milyen szögből, milyen háttér, milyen képzeletbeli látványt mutat be, milyen uralkodó színekkel.
        Nem kell a leírásokat kategorizálni, csak egy egyszerű lista kell.
        Egy-egy leírás ne legyen hosszabb 300 karakternél.
    `
    const result = await model.generateContent(prompt)
    return result.response.text()
        .split('\n')
        .filter(line => line.trim().length > 0)
})
