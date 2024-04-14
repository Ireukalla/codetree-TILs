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

let a = scanInt(),
  b = scanInt(),
  c = scanInt(),
  d = scanInt(),
  elapsed_time = 0

while (true) {
  if (a === c && b === d) {
    break
  }
  elapsed_time += 1
  b += 1

  if (b === 60) {
    a += 1
    b = 0
  }
}

console.log(elapsed_time)