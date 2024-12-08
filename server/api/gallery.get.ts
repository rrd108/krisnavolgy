import getImages from '../utils/getImages'

export default defineEventHandler(async () => {
    const images = getImages()
    return { images }
})
