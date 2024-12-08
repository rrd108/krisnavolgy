import fs from 'fs'
import path from 'path'

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']

const getImages = () => {
    const imagesDir = path.join(process.cwd(), 'public', 'images')

    try {
        if (!fs.existsSync(imagesDir)) {
            return []
        }

        return fs.readdirSync(imagesDir)
            .filter(file => {
                const ext = path.extname(file).toLowerCase()
                return imageExtensions.includes(ext)
            })
            .map(file => ({
                name: file,
                path: `/images/${file}`,
            }))
    } catch (error) {
        console.error('Error reading images directory:', error)
        return []
    }
}

export default getImages 