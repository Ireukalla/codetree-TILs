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

class Bomb {
  constructor(code, color, second) {
    this.code = code
    this.color = color
    this.second = second
  }

  printer = () => {
    console.log(
      `code : ${this.code}\ncolor : ${this.color}\nsecond : ${this.second}`
    )
  }
}

let code = scanString()
let color = scanString()
let second = scanInt()

let bomb = new Bomb(code, color, second)
bomb.printer()