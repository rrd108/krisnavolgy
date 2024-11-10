import { promises as fs } from 'fs'
import path from 'path'

const PAGES_DIR = './pages'
const OUTPUT_FILE = './data/pagesContent.json'

const getFestivals = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/festivals')
        const data = await response.json()
        return data.festivals.filter((festival) =>festival.url)
    } catch (error) {
        console.error('Error fetching festivals:', error)
        return []
    }
}

const extractContentFromFile = async (filePath, type) => {
    try {
        let content = await fs.readFile(filePath, 'utf-8')

        const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s)
        const fileName = path.basename(filePath).replace(/\.vue$/, '')

        // Use h1 content if found, fallback to fileName
        const title = h1Match
            ? h1Match[1].replace(/<[^>]+>/g, '').trim() // Remove any nested tags
            : fileName.replace(/[A-Z]/g, letter => ` ${letter}`).trim()

        // Create URL path from file path
        const urlPath = filePath.replace(/\.vue$/, '')

        // TODO algoila record limit
        // if (urlPath == 'pages/csoportok') {
        //     const sections = content.match(/<section[^>]*>(.*?)<\/section>/gs)
        //     we can extracct the hash and title from h3
        //     console.log(sections)
        // }

        if (urlPath == 'pages/programok') {
            const festivals = await getFestivals()
            content = ''
            festivals.forEach(festival => {      
                content += `${festival.title} ${festival.start_date} ${festival.end_date} ${festival.description} `
            })
        }

        content = content
            .replace(title, '')
            .replace(/<script[^>]*>.*?<\/script>/s, '')
            .replace(/<style[^>]*>.*?<\/style>/s, '')
            .replace(/<\/*template>/s, '')
            .replace(/<NuxtLink[^>]*>(.*?)<\/NuxtLink>/gs, '$1')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()

        return {
            objectID: urlPath || '/',
            title,
            site: 'https://jaccoter.1108.cc',
            content,
            type,
            path: urlPath.replace('pages', '') || '/',
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error)
        return null
    }
}

const scanDirectory = async (dir, type) => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const files = []

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)

        if (entry.isDirectory() && entry.name === 'admin') {
            console.log(`Skipping admin directory: ${fullPath}`)
            continue
        }

        if (entry.isDirectory()) {
            files.push(...(await scanDirectory(fullPath, type)))
            continue
        }

        if (/\.vue$/.test(entry.name) && !entry.name.startsWith('_')) {
            files.push(fullPath)
        }
    }

    return files
}

const generateAlgoliaContent = async () => {
    try {
        // Scan pages and components
        const pageFiles = await scanDirectory(PAGES_DIR, 'page')

        // Process all files
        const contents = await Promise.all([
            ...pageFiles.map(file => extractContentFromFile(file, 'page')),
        ])

        // Filter out null results and write to file
        const validContents = contents.filter(page => page.content !== '')
        await fs.writeFile(
            OUTPUT_FILE,
            JSON.stringify(validContents, null, 2),
        )

        console.log(`✅ Generated Algolia content at ${OUTPUT_FILE}`)
        console.log(`Found ${validContents.length} entries`)
    } catch (error) {
        console.error('❌ Error generating Algolia content:', error)
        process.exit(1)
    }
}

generateAlgoliaContent()
