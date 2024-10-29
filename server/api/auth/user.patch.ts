import bcrypt from "bcrypt"

export default defineEventHandler(async (event) => {
    const db = useDatabase();
    const data = await readBody(event)
    const options = useRuntimeConfig().public.nuxtTokenAuthentication

    // Validate input
    if (!data.password) {
        throw createError({
            statusCode: 400,
            message: "New password is required"
        })
    }

    // Get the token from the headers
    const token = getHeader(event, 'Token')
    // Find the user by token
    const {rows} = await db.sql`SELECT * FROM {${options.authTable}} WHERE token = ${token as string} LIMIT 1`

    if (!rows) {
        throw createError({
            statusCode: 401,
            message: "Unauthorized"
        })
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = rows[0]
    // Update the user's password
    const result = await db.sql`UPDATE {${options.authTable}} SET password = ${hashedPassword} WHERE email = ${user.email as string}`

    return { result }
})
