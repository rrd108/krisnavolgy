import fs from 'node:fs'
import path from 'node:path'
import { slugify } from '~/composables/slugify'
import { createError } from 'h3'

export default defineEventHandler(async (event) => {
    const uploadDir = path.join(process.cwd(), 'public/images')
    const body = await readMultipartFormData(event)
    const image = body?.find(item => item.name === 'file')

    if (!image || !image.filename || !image.data || !image.type?.startsWith('image/')) {
        throw createError({
            statusCode: 400,
            message: 'Invalid image upload',
        })
    }

    // Validate file size
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (image.data.length > maxSize) {
        throw createError({
            statusCode: 400,
            message: `File size too large. Maximum size is ${maxSize / 1024 / 1024}MB`,
        })
    }

    const getUniqueFilename = (basePath: string, originalName: string) => {
        let filename = slugify(originalName)
        let counter = 1

        while (fs.existsSync(path.join(basePath, filename))) {
            const ext = path.extname(originalName)
            const nameWithoutExt = path.basename(originalName, ext)
            filename = slugify(`${nameWithoutExt}-${counter}${ext}`)
            counter++
        }

        return filename
    }

    const filename = getUniqueFilename(uploadDir, image.filename)
    const filepath = path.join(uploadDir, filename)

    fs.writeFileSync(filepath, image.data)

    return {
        success: true,
        filename,
    }
})
