const different = (chars: string[]) => {
  for (const [index, char] of chars.entries()) {
    if (chars.indexOf(char) !== index) return false
  }
  return true
}

const getIndex = (signal: string, markerSize: number) => {
  const _signal = [...signal]
  for (let i = 0; i <= _signal.length - markerSize; i++) {
    const endMarker = i + markerSize
    if (different(_signal.slice(i, endMarker))) return endMarker
  }
}

export const getPackageIndex = (signal: string) => getIndex(signal, 4)

exports.first = getPackageIndex

export const getMessageIndex = (signal: string) => getIndex(signal, 14)

exports.second = getMessageIndex
