import {
  createCommand,
  getUpperCrates9000,
  getUpperCrates9001,
  parseCommands,
  parseCrates,
} from '../src/day05'

const SUPPLY_STACK = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`

test('day 5-1 parseCrates', () => {
  const [crates] = SUPPLY_STACK.split('\n\n')
  expect(parseCrates(crates)).toEqual([['Z', 'N'], ['M', 'C', 'D'], ['P']])
})

test('day 5-1 parseCommands', () => {
  const [_, commands] = SUPPLY_STACK.trim().split('\n\n')
  expect(parseCommands(commands)).toEqual([
    createCommand(1, 2, 1),
    createCommand(3, 1, 3),
    createCommand(2, 2, 1),
    createCommand(1, 1, 2),
  ])
})

test('day 5-1 getUpperCrates9000', () => {
  expect(getUpperCrates9000(SUPPLY_STACK)).toBe('CMZ')
})

test('day 5-2 getUpperCrates9001', () => {
  expect(getUpperCrates9001(SUPPLY_STACK)).toBe('MCD')
})
