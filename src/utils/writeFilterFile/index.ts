import fs from 'fs'

interface Args {
  path: string
  fileName: string
  data: string
}

const writeFilterFile = (args: Args): void => {
  const { path, fileName, data } = args

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }

  fs.writeFileSync(`${path}/${fileName}`, data)
}

export default writeFilterFile
