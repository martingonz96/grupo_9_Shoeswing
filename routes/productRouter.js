const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const path = require ('path')



router.get("/productCart", controller.productCart);

router.get("/detail/:id/", controller.productDetail);

router.get("/addProduct", controller.addProduct);

router.get("/editProduct", controller.editProduct);

router.get("/", controller.products)

module.exports = router;