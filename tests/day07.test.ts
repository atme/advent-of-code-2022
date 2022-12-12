import { findDirToDelete, sumOfTotalSize } from '../src/day07'

const COMMANDS = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`.trim()

test('day 7-1 sumOfTotalSize', () => {
  expect(sumOfTotalSize(COMMANDS)).toBe(95437)
})

test('day 7-2 findDirToDelete', () => {
  expect(findDirToDelete(COMMANDS)).toBe(24933642)
})
