export enum FilterCategory {
  ads = 'ads',
  malware = 'malware',
  privacy = 'privacy',
  banners = 'banners',
  popups = 'popups',
}

export interface Filter {
  name: string
  description: string
  category: Array<FilterCategory>
  value: string
}
