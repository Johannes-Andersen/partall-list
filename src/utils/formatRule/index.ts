import { Filter } from '../../types'

const formatRule = (filter: Filter): string => {
  const { name, description, value } = filter

  const formattedRule = `! ${name} - ${description} \n${value}`

  return formattedRule
}

export default formatRule
