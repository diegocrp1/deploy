const { Router } = require('express');
const { getTypesHandler } = require('../handlers/getTypesHandler');
const { createTypeHandler } = require('../handlers/createTypeHandler');
const routerType = Router();


routerType.get('/',getTypesHandler)
routerType.post('/',createTypeHandler)


module.exports=routerType