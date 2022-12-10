const different = (chars: string[]) => {
  for (const [index, char] of chars.entries()) {
    if (chars.indexOf(char) !== index) return false
  }
  return true
}

const getIndex = (signal: string, markerSize: number) => {
  const queue: string[] = []
  const push = (symbol: string) => {
    queue.push(symbol)
    if (queue.length > markerSize) {
      queue.shift()
    }
  }

  for (const [index, symbol] of [...signal].entries()) {
    if (queue.length === markerSize && different(queue)) {
      return index
    }
    push(symbol)
  }
}

export const getPackageIndex = (signal: string) => getIndex(signal, 4)

exports.first = getPackageIndex

export const getMessageIndex = (signal: string) => getIndex(signal, 14)

exports.second = getMessageIndex
