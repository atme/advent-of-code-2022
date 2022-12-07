type Stack = string[]
type Crates = Stack[]
type Command = { move: number; from: number; to: number }

const push = (element: string, stack: Stack = []): Stack => {
  return [...stack, element]
}

const take = (count: number, stack: Stack = []): string[] => {
  return stack.splice(-1 * count)
}

export const createCommand = (
  move: number,
  from: number,
  to: number
): Command => {
  return { move: move, from: from - 1, to: to - 1 }
}

export const parseCrates = (cratesRaw: string): Crates => {
  const [numbers, ...lines] = cratesRaw.split('\n').reverse()
  const positions = numbers.trim().split('   ')

  const result: Crates = []

  let position = 1
  for (const index of positions.keys()) {
    for (const line of lines) {
      const letter = line[position]
      if (letter && /\w/.test(letter)) {
        result[index] = push(letter, result[index])
      }
    }
    position += 4
  }

  return result
}

export const parseCommands = (commandsRaw: string): Command[] => {
  return commandsRaw.split('\n').map((command) => {
    const { groups = {} } =
      command.match(/move (?<move>\d+) from (?<from>\d+) to (?<to>\d+)/) || {}

    return createCommand(
      Number(groups.move),
      Number(groups.from),
      Number(groups.to)
    )
  })
}

const parse = (supplyStack: string): [Crates, Command[]] => {
  const [crates, commands] = supplyStack.split('\n\n')
  return [parseCrates(crates), parseCommands(commands)]
}

const moveStacks9000 = (crates: Crates, command: Command) => {
  const elements = take(command.move, crates[command.from]).reverse()
  for (const element of elements) {
    crates[command.to] = push(element, crates[command.to]).filter(Boolean)
  }
  return crates
}

export const getUpperCrates9000 = (supplyStack: string) => {
  const [crates, commands] = parse(supplyStack)
  for (const command of commands) {
    moveStacks9000(crates, command)
  }

  return crates.map((stack) => stack.pop() || ' ').join('')
}

exports.first = getUpperCrates9000


const moveStacks9001 = (crates: Crates, command: Command) => {
  const elements = take(command.move, crates[command.from])
  for (const element of elements) {
    crates[command.to] = push(element, crates[command.to]).filter(Boolean)
  }
  return crates
}

export const getUpperCrates9001 = (supplyStack: string) => {
  const [crates, commands] = parse(supplyStack)
  for (const command of commands) {
    moveStacks9001(crates, command)
  }

  return crates.map((stack) => stack.pop() || ' ').join('')
}

exports.second = getUpperCrates9001
