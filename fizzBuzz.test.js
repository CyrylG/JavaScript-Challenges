const fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
    
    it('is fizz', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it('is buzz', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it('is fizzbuzz', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    it('returns user input number', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});