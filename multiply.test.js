const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 3 and 4', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});