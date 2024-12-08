export const slugify = (text: string) => {
    const charMap = {
        'ö': 'o',
        'ü': 'u',
        'ó': 'o',
        'ő': 'o',
        'ú': 'u',
        'é': 'e',
        'á': 'a',
        'ű': 'u',
        'í': 'i'
    }

    return text
        .toLowerCase()
        .replace(/[öüóőúéáűí]/g, (char) => charMap[char as keyof typeof charMap])
        .replace(/[^a-z0-9-.]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}
