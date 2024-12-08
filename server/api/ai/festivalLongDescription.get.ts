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
        Fesztivál neve: ${festival.title}
        Kezdési ideje: ${festival.start_date}
        Befejezési ideje: ${festival.end_date}
        Rövid leírás: ${festival.description}
        Célközönség: Fiatal felnőttek és családok a magyar középosztályban
        Célközönség területi eloszlása: Budapest és Balaton
        Helyszín: Krisna-völgy
        A kommunikáció sílusa: pozitív, hívogató, közérthető, értékalapú, személyes

        Generálj 2 bekezdésnyi leírást a fesztiválra a fesztivál neve és rövid leírása alapján azzal a céllal, hogy a fesztiválra minél többen ideutazzanak és részt vegyenek

        A generált szövegben ne használd az "a" névelőt Krisna-völgy szó előtt

        A leírásban azokat a kulcsszavakat amelyek a látogatók számára a legfontosabbak, tedd ** jelek közé, például: **feltöltődés**, de a generált szövegben maximum 3-5 ilyen jel legyen

        A leírás Krisna-völgy honlapján jelenik meg
    `
    const result = await model.generateContent(prompt)
    return result.response.text()
        .replaceAll('\n', '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
})
