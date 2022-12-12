type Leaf = {
  size: number
  parent: Leaf | undefined
}

const addSize = (size: number, dir?: Leaf) => {
  if (dir) {
    dir.size += size
    addSize(size, dir.parent)
  }
}

const parse = (commands: string) => {
  const dirs: Leaf[] = []

  let currentLeaf: Leaf | undefined = undefined

  for (const command of commands.split('\n')) {
    if (command === '$ cd ..' && currentLeaf) {
      currentLeaf = currentLeaf.parent
      continue
    }

    if (command.includes('$ cd')) {
      currentLeaf = { size: 0, parent: currentLeaf }
      dirs.push(currentLeaf)
    }

    if (['$', 'd'].includes(command[0])) continue

    const [size] = command.split(' ').map(Number)
    addSize(size, currentLeaf)
  }

  return dirs
}

export const sumOfTotalSize = (commands: string) => {
  return parse(commands)
    .filter((dir) => dir.size <= 100000)
    .reduce((a, { size: b }) => a + b, 0)
}

exports.first = sumOfTotalSize

export const findDirToDelete = (commands: string) => {
  const DISK_SPACE_AVAILABLE = 70000000
  const NEEDED_SPACE = 30000000

  const dirs = parse(commands)
  const totalSpace = dirs.find(({ parent }) => parent === undefined)?.size || 0
  const minFolderSize = NEEDED_SPACE - (DISK_SPACE_AVAILABLE - totalSpace)

  return (
    dirs
      .map(({ size }) => size)
      .filter((size) => size >= minFolderSize)
      .sort((a, b) => b - a)
      .pop() || 0
  )
}

exports.second = findDirToDelete
