const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
    it('returns a promise with pikachu data', () => {
        fetchPokemon('pikachu')
        .then((poke) => {
            expect(poke.name).toEqual('pikachu');
            expect(poke.height).toEqual(4);
        })
    })
})