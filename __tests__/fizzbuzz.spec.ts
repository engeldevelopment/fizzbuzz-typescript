import FizzBuzzCalculator from '../src/app'


describe("FizzBuzz Calculator", () => {
  let fizzbazz: FizzBuzzCalculator;

  beforeEach(() => {
    fizzbazz = new FizzBuzzCalculator()
  })
  describe("cuando el número es divisible entre 3", () => {
    it("debería decir fizz", () => {
	    expect(fizzbazz.valueOfNumber(9)).toEqual('fizz')
	    expect(fizzbazz.valueOfNumber(3)).toEqual('fizz')
	    expect(fizzbazz.valueOfNumber(21)).toEqual('fizz')
    })
  })

  describe("cuando el número es divisible entre 5", () => {
    it("debería decir bazz", () => {
	    expect(fizzbazz.valueOfNumber(25)).toEqual('buzz')
	    expect(fizzbazz.valueOfNumber(10)).toEqual('buzz')
	    expect(fizzbazz.valueOfNumber(5)).toEqual('buzz')
    })
  })

  describe("cuando el número es divisible entre 3 y 5", () => {
    it("debería decir fizzbazz", () => {
	    expect(fizzbazz.valueOfNumber(30)).toEqual('fizzbuzz')
	    expect(fizzbazz.valueOfNumber(15)).toEqual('fizzbuzz')
    })
  })

  describe("cuando el número no es divisible entre 3 y 5", () => {
    it("debería mostrar el número", () => {
	    expect(fizzbazz.valueOfNumber(1)).toEqual('1')
	    expect(fizzbazz.valueOfNumber(2)).toEqual('2')
	    expect(fizzbazz.valueOfNumber(7)).toEqual('7')
	    expect(fizzbazz.valueOfNumber(8)).toEqual('8')
    })
  })

})
