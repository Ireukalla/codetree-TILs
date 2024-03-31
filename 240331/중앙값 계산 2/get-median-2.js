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
let seq = []
let ans = []

const median = (seq) => {
  seq.sort((front, back) => front - back)
  return seq[parseInt(seq.length / 2)]
}

for (let i = 0; i < n; i++) {
  seq.push(scanInt())
  if (seq.length % 2 != 0) {
    ans.push(median(seq))
  }
}

console.log(ans.join(' '))