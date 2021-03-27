export default class FizzBuzzCalculator {
    valueOfNumber(number: number): string {
        let message = ""
        if (this.isMultipleOfBoth(number)) {
            message = 'fizzbuzz'
        } else if (this.isMultipleOfFive(number)) {
            message = 'buzz'
        } else if (this.isMultipleOfThree(number)) {
            message = 'fizz'
        } else {
            message = number.toString()
        }
        return message
    }

    private isMultipleOfThree(number: number): boolean {
        return (number % 3) == 0
    }

    private isMultipleOfFive(number: number): boolean {
        return (number % 5) == 0
    }

    private isMultipleOfBoth(number: number) {
        return this.isMultipleOfThree(number) && this.isMultipleOfFive(number)
    }
}
