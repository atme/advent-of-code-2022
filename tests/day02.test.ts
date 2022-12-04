import { countScore, countScore2 } from '../src/day02'

const STRATEGY_GUIDE = `
A Y
B X
C Z
`

test('day 2-1', () => {
  expect(countScore(STRATEGY_GUIDE)).toBe(15)
})

test('day 1-2', () => {
  expect(countScore2(STRATEGY_GUIDE)).toBe(12)
})
