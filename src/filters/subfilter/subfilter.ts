import { Filter, FilterCategory } from '../../types'

export const subFilter: Filter = {
  name: 'SubFilter',
  description: 'Sub filter',
  category: [FilterCategory.privacy],
  value: 'example.no',
}
