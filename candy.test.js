const Candy = require('./candy');

describe('Candy', () => {
    it('returns name', () => {
        candy = new Candy('Mars', 3.99)
        expect(candy.getName()).toBe('Mars')
    })

    it('returns price', () => {
        candy = new Candy('Mars', 3.99)
        expect(candy.getPrice()).toBe(3.99)
    })
})