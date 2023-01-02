interface Args {
  title: string
  version: string
  expiresInDays: number
  description: string
}

const createFileHeader = (args: Args): string => {
  const { title, version, expiresInDays, description } = args

  const headerParts = [
    `! Title: ${title}`,
    `! Description: ${description}`,
    `! Version: ${version}`,
    `! Homepage: https://github.com/Johannes-Andersen/partall-list`,
    `! Expires: ${expiresInDays} days`,
    `! License: GPL-3.0 (https://github.com/Johannes-Andersen/partall-list/blob/main/LICENSE)`,
  ]

  return headerParts.join('\n')
}

export default createFileHeader
