const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get("/", controller.index);

router.get("/login", controller.login);

router.get("/productCart", controller.productCart);

router.get("/detalle/:id/", controller.productDetail);

router.get("/register", controller.register);

router.get("/nosotros", controller.nosotros);

router.get("/contacto", controller.contacto);

router.get("/mediosDePago", controller.mediosDePago);

router.get("/preguntasFrecuentes", controller.preguntasFrecuentes);

router.get("/politicasEnvio", controller.politicasEnvio);

router.get("/addProduct", controller.addProduct);

router.get("/editProduct", controller.editProduct);


module.exports = router;