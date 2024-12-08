import { describe, it, expect } from 'vitest'
import { slugify } from './slugify'

describe('slugify', () => {
    it('converts string to lowercase', () => {
        expect(slugify('HELLO')).toBe('hello')
    })

    it('replaces spaces with hyphens', () => {
        expect(slugify('hello world')).toBe('hello-world')
    })

    it('removes special characters', () => {
        expect(slugify('hello! @world#')).toBe('hello-world')
    })

    it('replaces multiple hyphens with single hyphen', () => {
        expect(slugify('hello---world')).toBe('hello-world')
    })

    it('removes leading and trailing hyphens', () => {
        expect(slugify('-hello world-')).toBe('hello-world')
    })

    it('handles Hungarian characters correctly', () => {
        expect(slugify('öüóőúéáűí')).toBe('ouooueaui')
    })

    it('handles mixed case with special characters and Hungarian letters', () => {
        expect(slugify('Helló Világí!')).toBe('hello-vilagi')
    })

    it('handles empty string', () => {
        expect(slugify('')).toBe('')
    })

    it('handles string with only special characters', () => {
        expect(slugify('!@#$%')).toBe('')
    })

    it('preserves numbers', () => {
        expect(slugify('hello123world')).toBe('hello123world')
    })

    it('preserves dots', () => {
        expect(slugify('rrd.test')).toBe('rrd.test')
    })
})
