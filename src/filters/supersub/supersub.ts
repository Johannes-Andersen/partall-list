import { Filter, FilterCategory } from '../../types'

export const superSub: Filter = {
  name: 'SuperSub',
  description: 'SuperSub filter',
  category: [FilterCategory.privacy],
  value: 'example.net',
}
