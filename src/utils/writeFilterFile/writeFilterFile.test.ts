import writeFilterFile from './index'
import { it, expect, afterEach } from 'vitest'
import fs from 'fs'

afterEach(() => {
  fs.rmSync('./.test-temp', { recursive: true })
})

it('should write a the folder if it does not exist', () => {
  expect(fs.existsSync('./.test-temp')).toBe(false)
  writeFilterFile({ path: './.test-temp', fileName: 'test.txt', data: 'hi' })
  expect(fs.existsSync('./.test-temp')).toBe(true)
})

it('should write the file with the provided content', () => {
  writeFilterFile({ path: './.test-temp', fileName: 'test.txt', data: 'hi!' })
  expect(fs.readFileSync('./.test-temp/test.txt', 'utf8')).toBe('hi!')
})
