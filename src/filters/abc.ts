import { Filter, FilterCategory } from '../types'

export const abcFilter: Filter = {
  name: 'abc',
  description: 'abc',
  category: [FilterCategory.ads],
  value: '@@||www.f-b.no/api/aid/users/*$xhr,1p',
}
