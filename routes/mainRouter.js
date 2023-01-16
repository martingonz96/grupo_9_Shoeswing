const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");
const multer = require('multer');
const path = require('path');


//**** multer *////

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      
const uniqueSuffix = Date.now() + path.extname(file.originalname)+ '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage });

  //**** multer *////

router.get("/", controller.index);

router.get('/search', controller.search);

router.get("/login", controller.login);

router.get("/register", controller.register);

router.get("/nosotros", controller.nosotros);

router.get("/contacto", controller.contacto);

router.get("/mediosDePago", controller.mediosDePago);

router.get("/preguntasFrecuentes", controller.preguntasFrecuentes);

router.get("/politicasEnvio", controller.politicasEnvio);

module.exports = router;