import createFileHeader from './index'
import { it, expect } from 'vitest'

it('should create a header', () => {
  expect(
    createFileHeader({
      description: 'A description with text',
      title: 'Some funny title',
      version: '1.0.0',
      expiresInDays: 7,
    })
  ).toBe(`! Title: Some funny title
! Description: A description with text
! Version: 1.0.0
! Homepage: https://github.com/Johannes-Andersen/partall-list
! Expires: 7 days
! License: GPL-3.0 (https://github.com/Johannes-Andersen/partall-list/blob/main/LICENSE)`)
})
