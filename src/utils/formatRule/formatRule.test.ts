import formatRule from './index'
import { it, expect } from 'vitest'
import { Filter, FilterCategory } from '../../types'

it('should create a formatted rule', () => {
  const filter: Filter = {
    name: 'Blocky McBlockface',
    description: 'It done for',
    value: '||example.com^',
    category: [FilterCategory.ads],
  }

  const formattedRule = formatRule(filter)

  expect(formattedRule).toBe(
    `! Blocky McBlockface - It done for \n||example.com^`
  )
})
