export class Cpf {
  private cpf: string

  constructor(value: string) {
    if (!this.validate(value)) throw new Error('Invalid CPF')
    this.cpf = this.removeMask(value)
  }

  public getCpf() {
    return this.cpf
  }

  private validate(value: string) {
    if (!value) return false
    const cpf = this.removeMask(value)
    if (!this.isValidLength(cpf)) return false
    if (this.allEqualDigits(cpf)) return false
    return this.mountCheckDigit(cpf) === this.extractCheckDigit(cpf)
  }

  private removeMask(value: string) {
    return value.replace(/[^0-9]/g, '')
  }

  private isValidLength(value: string) {
    return value.length === 11
  }

  private allEqualDigits(value: string) {
    return value.split('').every((digit) => digit === value[0])
  }

  private mountCheckDigit(value: string) {
    const calculateCheckDigit1 = this.calculateCheckDigit(value, 10)
    const calculateCheckDigit2 = this.calculateCheckDigit(value, 11)
    return `${calculateCheckDigit1}${calculateCheckDigit2}`
  }

  private calculateCheckDigit(value: string, counter: number) {
    let total = 0
    for (const digit of value) {
      if (counter === 1) break
      const numericDigit = parseInt(digit)
      total += numericDigit * counter
      counter--
    }
    const rest = total % 11
    return rest < 2 ? 0 : 11 - rest
  }

  private extractCheckDigit(value: string) {
    return value.slice(9)
  }
}
