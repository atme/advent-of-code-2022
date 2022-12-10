import { getMessageIndex, getPackageIndex } from '../src/day06'

test('day 6-1-1 getPackageIndex', () => {
  expect(getPackageIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7)
})

test('day 6-1-2 getPackageIndex', () => {
  expect(getPackageIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
})

test('day 6-2-1 getMessageIndex', () => {
  expect(getMessageIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19)
})

test('day 6-2-2 getMessageIndex', () => {
  expect(getMessageIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23)
})
