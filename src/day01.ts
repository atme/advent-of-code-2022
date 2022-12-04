const parse = (s: string) =>
  s
    .trim()
    .split('\n\n')
    .map((s) => s.split('\n').map((s) => parseInt(s)))

export const max = (s: string) =>
  Math.max(...parse(s).map((numbers) => numbers.reduce((a, b) => a + b)))

exports.first = max

export const topThree = (s: string) =>
  parse(s)
    .map((numbers) => numbers.reduce((a, b) => a + b))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)

exports.second = topThree
