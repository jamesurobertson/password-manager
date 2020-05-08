
class Generate {
  constructor(num) {
    this.num = num
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz'
    this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.numbers = '0123456789'
    this.symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'
    this.chars = [this.lowercase, this.uppercase, this.numbers, this.symbols]
  }

  allSymbols() {
    let password = ''
    for (let i = 0; i < this.num; i++) {
      const random = Math.floor(Math.random() * 4)
      const randomChar = Math.floor(Math.random() * this.chars[random].length)
      password += this.chars[random][randomChar]

    }
    return password
  }

  fewSymbols() {
    this.symbols = '!@#$%^&*()'
    this.chars = [this.lowercase, this.uppercase, this.numbers, this.symbols]
    let password = ''
    for (let i = 0; i < this.num; i++) {
      const random = Math.floor(Math.random() * 4)
      const randomChar = Math.floor(Math.random() * this.chars[random].length)
      password += this.chars[random][randomChar]

    }
    return password
  }

}

exports.Generate = Generate
