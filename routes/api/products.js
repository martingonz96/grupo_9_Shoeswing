const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productApiController');

//Rutas
//Listado de películas
router.get('/', productsAPIController.productList);

router.get('/:id', productsAPIController.detail);

module.exports = router;