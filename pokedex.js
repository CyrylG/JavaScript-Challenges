const fetchPokemon = require('./api');

class Pokedex {
    constructor() {
        this.caughtPokemon = [];
    }

    all() {
        return this.caughtPokemon;
    }

    catch(pokemon) {
        return fetchPokemon(pokemon)
        .then(pokemon => {
            this.caughtPokemon.push(pokemon)
        });
    }
}

module.exports = Pokedex;