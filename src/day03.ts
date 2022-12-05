import { chunk } from 'lodash'

export type Comparements = [string, string]

export const compartments = (rucksack: string): Comparements => {
  const midIndex = rucksack.length / 2
  return [rucksack.slice(0, midIndex), rucksack.slice(midIndex)]
}

const parse = (rucksacks: string) => rucksacks.trim().split('\n')

export const findSameItems = (compartments: Comparements) => {
  for (const item of compartments[0]) {
    if (compartments[1].includes(item)) return item
  }
  return ''
}

export const priority = (item: string) => {
  const POSITION_OF_UPPERCASE_A = 65
  const POSITION_OF_LOWERCASE_A = 97
  const ALPHABET_LENGTH = 26

  const code = item.charCodeAt(0)

  const diff =
    code < POSITION_OF_LOWERCASE_A
      ? POSITION_OF_UPPERCASE_A - ALPHABET_LENGTH
      : POSITION_OF_LOWERCASE_A

  return code - diff + 1
}

export const sumOfSameItemsPriorities = (rucksacks: string) =>
  parse(rucksacks)
    .map(compartments)
    .map(findSameItems)
    .map(priority)
    .reduce((a, b) => a + b, 0)

exports.first = sumOfSameItemsPriorities

export type ElvesGroup = [string, string, string]

export const findGroupItem = (rucksacks: ElvesGroup) => {
  for (const item of rucksacks[0]) {
    if (rucksacks[1].includes(item) && rucksacks[2].includes(item)) return item
  }
  return ''
}

export const sumOfElvesGroupPriorities = (rucksacks: string) => {
  const groups = chunk(parse(rucksacks), 3) as ElvesGroup[]
  return groups
    .map(findGroupItem)
    .map(priority)
    .reduce((a, b) => a + b, 0)
}

exports.second = sumOfElvesGroupPriorities
