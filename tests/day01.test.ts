import { max, topThree } from '../src/day01'

const items = `
  1000
  2000
  3000

  4000

  5000
  6000

  7000
  8000
  9000

  10000
`

test('day 1-1', () => {
  expect(max(items)).toBe(24000)
})

test('day 1-2', () => {
  expect(topThree(items)).toBe(45000)
})
