const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/userApiController');

//Rutas
router.get('/', usersAPIController.listUsers);

router.get('/:id', usersAPIController.detail);

module.exports = router;