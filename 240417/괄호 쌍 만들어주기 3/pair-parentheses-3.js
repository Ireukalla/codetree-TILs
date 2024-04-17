const fs = require('fs')

const input = () => {
  // const input = fs.readFileSync('input.txt').toString()
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

// 'You can write the algorithm logic below this place.
// -------------------------------------------- CODE -------------------------------------------- //

let str = scanString()

const fn = (str) => {
  const leftClose = '('
  const rightClose = ')'
  let cnt = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === leftClose) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === rightClose) {
          cnt += 1
        }
      }
    }
  }

  return cnt
}

console.log(fn(str))