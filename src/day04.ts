import { range } from 'lodash'

const parse = (pairs: string) =>
  pairs
    .trim()
    .split('\n')
    .map((pair) =>
      pair.split(',').map((section) => {
        const [start, end] = section.split('-')
        return range(parseInt(start), parseInt(end) + 1)
      })
    )

const toString = (n: number[]) =>
  n.map((n) => n.toString().padStart(2, '0')).join(',')

export const countOfFullyContainRanges = (pairs: string) => {
  return parse(pairs).filter(([section1, section2]) => {
    const s1 = toString(section1)
    const s2 = toString(section2)
    return s1.includes(s2) || s2.includes(s1)
  }).length
}

exports.first = countOfFullyContainRanges

export const countOfContainRanges = (pairs: string) => {
  return parse(pairs).filter(([section1, section2]) => {
    for (const number of section1) {
      if (section2.includes(number)) return true
    }
    return false
  }).length
}

exports.second = countOfContainRanges
