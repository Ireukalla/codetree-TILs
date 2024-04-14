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

let m1 = scanInt(),
  d1 = scanInt(),
  m2 = scanInt(),
  d2 = scanInt()
let elapsed_days = 1

// 각 월별 일수 배열
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

while (true) {
  if (m1 === m2 && d1 === d2) {
    break
  }

  elapsed_days += 1
  d1 += 1

  if (d1 > num_of_days[m1]) {
    m1 += 1
    d1 = 1
  }
}

console.log(elapsed_days)