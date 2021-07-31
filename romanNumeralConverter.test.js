const { romanNumeralConverter } = require('./romanNumeralEncoder')

describe('1-10', () => {
    test('when passed I it returns 1', () => {
        expect(romanNumeralConverter('I')).toBe(1)
    })
    test('when passed II it returns 2', () => {
        expect(romanNumeralConverter('II')).toBe(2)
    })
    test('when passed III it returns 3', () => {
        expect(romanNumeralConverter('III')).toBe(3)
    })
    test('when passed IV it returns 4', () => {
        expect(romanNumeralConverter('IV')).toBe(4)
    })
    test('when passed V it returns 5', () => {
        expect(romanNumeralConverter('V')).toBe(5)
    })
    test('when passed VI it returns 6', () => {
        expect(romanNumeralConverter('VI')).toBe(6)
    })
    test('when passed IX it returns 9', () => {
        expect(romanNumeralConverter('IX')).toBe(9)
    })
    test('when passed X it returns 10', () => {
        expect(romanNumeralConverter('X')).toBe(10)
    })
})

describe('20-100', () => {
    test('when passed XX it returns 20', () => {
        expect(romanNumeralConverter('XX')).toBe(20)
    })
    test('when passed XXX it returns 30', () => {
        expect(romanNumeralConverter('XXX')).toBe(30)
    })
    test('when passed XL it returns 40', () => {
        expect(romanNumeralConverter('XL')).toBe(40)
    })
    test('when passed L it returns 50', () => {
        expect(romanNumeralConverter('L')).toBe(50)
    })
    test('when passed LX it returns 60', () => {
        expect(romanNumeralConverter('LX')).toBe(60)
    })
    test('when passed LXX it returns 70', () => {
        expect(romanNumeralConverter('LXX')).toBe(70)
    })
    test('when passed LXXX it returns 80', () => {
        expect(romanNumeralConverter('LXXX')).toBe(80)
    })
    test('when passed XC it returns 90', () => {
        expect(romanNumeralConverter('XC')).toBe(90)
    })
    test('when passed C it returns 100', () => {
        expect(romanNumeralConverter('C')).toBe(100)
    })
    
})

describe('100+', () => {
    test('when passed CD it returns 400', () => {
        expect(romanNumeralConverter('CD')).toBe(400)
    })
    test('when passed D it returns 500', () => {
        expect(romanNumeralConverter('D')).toBe(500)
    })
    test('when passed CM it returns 900', () => {
        expect(romanNumeralConverter('CM')).toBe(900)
    })
    test('when passed M it returns 1000', () => {
        expect(romanNumeralConverter('M')).toBe(1000)
    })
})