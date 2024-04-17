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

let N = scanInt()
let An = Array.from({length: N}, () => scanInt())
let cnt = 0

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (An[i] <= An[j] && An[j] <= An[k]) {
        cnt += 1
      }
    }
  }
}

console.log(cnt)