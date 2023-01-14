import createFileHeader from './utils/createHeader'
import formatRule from './utils/formatRule'
import generateVersion from './utils/generateVersion'
import getFilters from './utils/getFilters'
import writeFilterFile from './utils/writeFilterFile'

const filters = getFilters()

const header = createFileHeader({
  title: 'hello there',
  description: 'demo demo abc',
  version: generateVersion(),
  expiresInDays: 7,
})

const test = filters
  .map((filter) => {
    return formatRule(filter)
  })
  .join('\n\n')

const data = `${header} \n\n${test}`

writeFilterFile({ path: 'dist', fileName: 'test.txt', data })
