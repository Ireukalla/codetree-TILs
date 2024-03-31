const fs = require('fs')

const input = () => {
  const input = fs.readFileSync('/dev/stdin').toString()
  const tokens = input.split('\n').flatMap((token) => token.split(' '))
  const validTokens = tokens.filter((token) => token !== '')

  return validTokens
}

const TOKENS = input()
let TOKEN_INDEX = 0

const scanString = () => {
  const stringValue = TOKENS[TOKEN_INDEX]
  TOKEN_INDEX += 1
  return stringValue
}

const scanInt = () => {
  const intValue = parseInt(TOKENS[TOKEN_INDEX])
  TOKEN_INDEX += 1
  return intValue
}

// -------------------------------------------- CODE -------------------------------------------- //

let n = scanInt()
let sequenceA = []
let sequenceB = []

for (let i = 0; i < n; i++) {
  sequenceA.push(scanInt())
}
for (let i = 0; i < n; i++) {
  sequenceB.push(scanInt())
}

sequenceA.sort()
sequenceB.sort()

const sequenceAreEqual = (seqA, seqB) => {
  return (
    seqA.length === seqB.length &&
    seqA.every((value, index) => value === seqB[index])
  )
}

console.log(sequenceAreEqual(sequenceA, sequenceB) ? 'Yes' : 'No')