import { abcFilter } from './filters/abc'
import createFileHeader from './utils/createHeader'
import formatRule from './utils/formatRule'
import generateVersion from './utils/generateVersion'
import writeFilterFile from './utils/writeFilterFile'

const header = createFileHeader({
  title: 'hello there',
  description: 'demo demo abc',
  version: generateVersion(),
  expiresInDays: 7,
})

const test = formatRule(abcFilter)

const data = `${header} \n\n${test}`

writeFilterFile({ path: 'dist', fileName: 'test.txt', data })
