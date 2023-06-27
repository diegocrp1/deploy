const { Router } = require('express');
const { getPokemonHandler, getPokemonHandlerDetail } = require('../handlers/getPokemonHandler');
const { createPokemonHandler } = require('../handlers/createPokemonHandler');
const { getByNameHandler } = require('../handlers/getByNameHandler');
const routerPokemon = Router();

routerPokemon.get('/',getPokemonHandler)
routerPokemon.get('/name',getByNameHandler)
routerPokemon.get('/:idUser',getPokemonHandlerDetail)
routerPokemon.post('/',createPokemonHandler)

module.exports=routerPokemon