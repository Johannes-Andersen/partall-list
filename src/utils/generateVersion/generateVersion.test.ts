import generateVersion from './index'
import { it, expect } from 'vitest'

it('should create a version string in the correct format', () => {
  const version = generateVersion()
  const versionRegex = /^\d{4}\.\d{1,2}\.\d{1,2}-v[0-9a-f]{4}$/

  expect(versionRegex.test(version)).toBe(true)
})
