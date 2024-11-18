import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const inputPath = join(__dirname, '../data/elvonulas.json')
const outputPath = join(__dirname, '../data/elvonulas-clean.json')

const MAX_CONTENT_LENGTH = 8000

const cleanContent = (content) => {
    return content
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

const splitContent = (item, cleanedContent) => {
    // If content is within limits, return original item
    if (cleanedContent.length <= MAX_CONTENT_LENGTH) {
        return [{ ...item, content: cleanedContent }]
    }

    // Split content into chunks at sentence boundaries
    const chunks = []
    let remainingContent = cleanedContent
    let partNumber = 1

    while (remainingContent.length > 0) {
        let chunk = remainingContent.substring(0, MAX_CONTENT_LENGTH)
        let endIndex = chunk.length

        // Try to find a sentence boundary
        const lastPeriod = chunk.lastIndexOf('.')
        if (lastPeriod !== -1) {
            endIndex = lastPeriod + 1
        } else {
            // If no period, try to find a space
            const lastSpace = chunk.lastIndexOf(' ')
            if (lastSpace !== -1) {
                endIndex = lastSpace
            }
        }

        chunks.push({
            ...item,
            objectID: `${item.objectID}_part${partNumber}`,
            content: chunk.substring(0, endIndex).trim(),
            isPartial: true,
            partNumber,
            originalObjectID: item.objectID,
        })

        remainingContent = remainingContent.substring(endIndex).trim()
        partNumber++
    }

    // Log split information
    console.log(`Split content for objectID: ${item.objectID}`)
    console.log(`Original length: ${cleanedContent.length}`)
    console.log(`Split into ${chunks.length} parts`)
    console.log('---')

    return chunks
}

try {
    const data = JSON.parse(readFileSync(inputPath, 'utf8'))

    const cleanedData = data.flatMap(item => {
        const cleanedContent = cleanContent(item.content)
        return splitContent(item, cleanedContent)
    })

    writeFileSync(
        outputPath,
        JSON.stringify(cleanedData, null, 2),
        'utf8',
    )

    console.log('Content cleaned and split successfully!')
    console.log(`Original file: ${inputPath}`)
    console.log(`Cleaned file: ${outputPath}`)

} catch (error) {
    console.error('Error processing file:', error)
    process.exit(1)
}
