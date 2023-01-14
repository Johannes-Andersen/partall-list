import { Filter } from '../../types'
import glob from 'glob'
import path from 'path'

const getFilters = (): Array<Filter> => {
  const filterFiles = glob.sync(path.join(__dirname, '../../filters/**/*.ts'))
  const filterData = filterFiles.map((fileName) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const requiredFilter = require(fileName)

    const filters = requiredFilter

    const flattenedFilters = Object.keys(filters).map((key) => {
      return filters[key]
    })

    return flattenedFilters
  })

  return filterData.flat()
}

export default getFilters
