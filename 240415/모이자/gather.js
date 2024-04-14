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

const n = scanInt()
let homes = []

for (let i = 0; i < n; i++) {
  homes.push(scanInt())
}

let minSum = Number.MAX_VALUE
for (let i = 0; i < n; i++) {
  let sum = 0
  for (let j = 0; j < n; j++) {
    if (i === j) {
      continue
    }

    sum = sum + homes[j] * Math.abs(i - j)
  }
  minSum = Math.min(minSum, sum)
}

console.log(minSum)