const { Router } = require('express');
const router = Router();
const routerPokemon = require('./routerPokemon');
const routerType = require('./routerType');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
router.use('/pokemons', routerPokemon);
router.use('/type', routerType);


module.exports = router;
