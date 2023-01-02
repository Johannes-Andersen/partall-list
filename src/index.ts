import createFileHeader from './utils/createHeader'
import generateVersion from './utils/generateVersion'
import writeFilterFile from './utils/writeFilterFile'

const header = createFileHeader({
  title: 'hello there',
  description: 'demo demo abc',
  version: generateVersion(),
  expiresInDays: 7,
})

writeFilterFile({ path: 'dist', fileName: 'test.txt', data: header })
