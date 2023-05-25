const Pokedex = require('./pokedex');

describe('Pokedex', () => {
    it('returns empty array', () => {
        pokedex = new Pokedex();
        expect(pokedex.all()).toEqual([]);
    })

    it('returns array with 2 pokemon', () => {
        pokedex = new Pokedex();
        pokedex.catch('snorlax')
        .then(() => {
            pokedex.catch('mewtwo')
            .then(() => {
                expect(pokedex.all()[0].name).toBe('snorlax');
                expect(pokedex.all()[1].id).toBe(150);
            })
        })
    })
})