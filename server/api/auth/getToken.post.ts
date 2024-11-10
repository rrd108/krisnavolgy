import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    const db = useDatabase()
    const options = useRuntimeConfig().public.nuxtTokenAuthentication
    const data = await readBody(event)

    const { rows } = await db.sql`
    SELECT * FROM {${options.authTable}}
    WHERE email = ${data.email}
    LIMIT 1`

    const isPasswordValid = await bcrypt.compare(
        data.password,
        String(rows![0].password),
    )
    if (!isPasswordValid) {
        throw createError({
            status: 401,
            message: 'Username or password is incorrect!',
        })
    }

    const user = rows ? rows[0] : undefined
    let token
    if (user) {
        delete user.password
        token = crypto.randomUUID()
        await db.sql`UPDATE {${options.authTable}} SET token = ${token} WHERE email = ${user.email as string}`
    }
    return { ...user, token }
})
