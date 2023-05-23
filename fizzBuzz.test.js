const fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
    
    it('is fizz', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it('is buzz', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
});