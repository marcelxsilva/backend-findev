const { Router } = require('express');
const routes = Router();

routes.get('/', (req,res) => { return res.send('Deu bom') });

module.exports = routes;