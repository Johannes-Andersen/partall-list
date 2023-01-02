import crypto from 'node:crypto'

const generateVersion = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hash = crypto.randomBytes(2).toString('hex')

  return `${year}.${month}.${day}-v${hash}`
}

export default generateVersion
