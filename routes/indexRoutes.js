var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/users', indexController.listUsers);

router.get('/productsSql', indexController.productList)

module.exports = router;
