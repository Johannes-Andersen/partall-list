import { Filter, FilterCategory } from '../types'

export const xyzFilter: Filter = {
  name: 'xyz',
  description: 'xyz filter',
  category: [FilterCategory.ads, FilterCategory.malware],
  value: 'example.com',
}

export const numberFilter: Filter = {
  name: '123',
  description: '123 filter',
  category: [FilterCategory.banners],
  value: 'example.org',
}
