const { romanNumeralEncoder } = require('./romanNumeralEncoder')

describe('0, 1, 5, 10 additive', () => {
  it('when passed 0, returns an empty string', () => {
    expect(romanNumeralEncoder(0)).toBe("")
  })
  it('when passed 1, returns I', () => {
    expect(romanNumeralEncoder(1)).toBe("I")
  })
  it('when passed 2, returns II', () => {
    expect(romanNumeralEncoder(2)).toBe("II")
  })
  it('when passed 5, returns V', () => {
    expect(romanNumeralEncoder(5)).toBe("V")
  })
  it('when passed 6, returns VI', () => {
    expect(romanNumeralEncoder(6)).toBe("VI")
  })
  it('when passed 10, returns X', () => {
    expect(romanNumeralEncoder(10)).toBe("X")
  })
  it('when passed 11, returns XI', () => {
    expect(romanNumeralEncoder(11)).toBe("XI")
  })
  it('when passed 12, returns XII', () => {
    expect(romanNumeralEncoder(12)).toBe("XII")
  })
  it('when passed 13, returns XIII', () => {
    expect(romanNumeralEncoder(13)).toBe("XIII")
  })
  it('when passed 15, returns XV', () => {
    expect(romanNumeralEncoder(15)).toBe("XV")
  })
  it('when passed 16, returns XVI', () => {
    expect(romanNumeralEncoder(16)).toBe("XVI")
  })
  it('when passed 17, returns XVII', () => {
    expect(romanNumeralEncoder(17)).toBe("XVII")
  })
  it('when passed 20, returns XX', () => {
    expect(romanNumeralEncoder(20)).toBe("XX")
  })
  it('when passed 30, returns XXX', () => {
    expect(romanNumeralEncoder(30)).toBe("XXX")
  })
  it('when passed 21, returns XXI', () => {
    expect(romanNumeralEncoder(21)).toBe("XXI")
  })
  it('when passed 22, returns XXII', () => {
    expect(romanNumeralEncoder(22)).toBe("XXII")
  })
  it('when passed 23, returns XXIII', () => {
    expect(romanNumeralEncoder(23)).toBe("XXIII")
  })
  it('when passed 32, returns XXXII', () => {
    expect(romanNumeralEncoder(32)).toBe("XXXII")
  })
  it('when passed 35, returns XXXV', () => {
    expect(romanNumeralEncoder(35)).toBe("XXXV")
  })
})

describe('base-minus-1 numbers up to 34', () => {
  it("when passed 4 returns IV", () => {
    expect(romanNumeralEncoder(4)).toBe("IV")
  })
  it("when passed 9 returns IX", () => {
    expect(romanNumeralEncoder(9)).toBe("IX")
  })
  it("when passed 14 returns XIV", () => {
    expect(romanNumeralEncoder(14)).toBe("XIV")
  })
  it("when passed 19 returns XIX", () => {
    expect(romanNumeralEncoder(19)).toBe("XIX")
  })
  it("when passed 29 returns XIX", () => {
    expect(romanNumeralEncoder(29)).toBe("XXIX")
  })
  it("when passed 34 returns XXXIV", () => {
    expect(romanNumeralEncoder(34)).toBe("XXXIV")
  })
})

describe('40 to 100', () => {
  it("when passed 40 it returns XL", () => {
    expect(romanNumeralEncoder(40)).toBe("XL")
  })
  it("when passed 42 it returns XLII", () => {
    expect(romanNumeralEncoder(42)).toBe("XLII")
  })
  it("when passed 44 it returns XLII", () => {
    expect(romanNumeralEncoder(44)).toBe("XLIV")
  })
  it("when passed 50 it returns L", () => {
    expect(romanNumeralEncoder(50)).toBe("L")
  })
  it("when passed 56 it returns LVI", () => {
    expect(romanNumeralEncoder(56)).toBe("LVI")
  })
  it("when passed 60 it returns LX", () => {
    expect(romanNumeralEncoder(60)).toBe("LX")
  })
  it("when passed 70 it returns LXX", () => {
    expect(romanNumeralEncoder(70)).toBe("LXX")
  })
  it("when passed 80 it returns LXXX", () => {
    expect(romanNumeralEncoder(80)).toBe("LXXX")
  })
  it("when passed 90 it returns XC", () => {
    expect(romanNumeralEncoder(90)).toBe("XC")
  })
  it("when passed 100 it returns C", () => {
    expect(romanNumeralEncoder(100)).toBe("C")
  })
})

describe('100 and above', () => {
  it("when passed 110 it returns CX", () => {
    expect(romanNumeralEncoder(110)).toBe("CX")
  })
  it("when passed 150 it returns CL", () => {
    expect(romanNumeralEncoder(150)).toBe("CL")
  })
  it("when passed 402 it returns CDII", () => {
    expect(romanNumeralEncoder(402)).toBe("CDII")
  })
  it("when passed 520 it returns DXX", () => {
    expect(romanNumeralEncoder(520)).toBe("DXX")
  })
  it("when passed 900 it returns CM", () => {
    expect(romanNumeralEncoder(900)).toBe("CM")
  })
  it("when passed 1000 it returns M", () => {
    expect(romanNumeralEncoder(1000)).toBe("M")
  })
  it("when passed 2034 it returns MMXXXIV", () => {
    expect(romanNumeralEncoder(2034)).toBe("MMXXXIV")
  })
})


// edge cases
// reject decimals
// reject other non-integer types