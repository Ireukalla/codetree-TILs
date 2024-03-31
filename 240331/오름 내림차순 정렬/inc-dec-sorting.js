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
let array = []
for (let i = 0; i < n; i++) {
  array.push(scanInt())
}

let ascCmp = (front, back) => {
  return front - back
}

let descCmp = (front, back) => {
  return back - front
}

console.log(array.sort(ascCmp).join(' '))
console.log(array.sort(descCmp).join(' '))