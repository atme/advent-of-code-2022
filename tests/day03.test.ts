import {
  Comparements,
  compartments,
  ElvesGroup,
  findGroupItem,
  findSameItems,
  priority,
  sumOfElvesGroupPriorities,
  sumOfSameItemsPriorities,
} from '../src/day03'

const RUCKSACKS = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`

test('day 3-1 comparements', () => {
  const rucksack = RUCKSACKS.trim().split('\n').shift()!
  expect(compartments(rucksack)).toEqual(['vJrwpWtwJgWr', 'hcsFMMfFFhFp'])
})

test('day 3-1 findSameItems', () => {
  const comparements: Comparements = ['vJrwpWtwJgWr', 'hcsFMMfFFhFp']
  expect(findSameItems(comparements)).toBe('p')
})

test('day 3-1 priority lowercase', () => {
  expect(priority('p')).toBe(16)
})

test('day 3-1 priority uppercase', () => {
  expect(priority('P')).toBe(42)
})

test('day 3-1 sumOfSameItemsPriorities', () => {
  expect(sumOfSameItemsPriorities(RUCKSACKS)).toBe(157)
})

test('day 3-2 findGroupItem', () => {
  const rucksacks = RUCKSACKS.trim().split('\n').slice(0, 3) as ElvesGroup
  expect(findGroupItem(rucksacks)).toBe('r')
})

test('day 3-2 sumOfElvesGroupPriorities', () => {
  expect(sumOfElvesGroupPriorities(RUCKSACKS)).toBe(70)
})
