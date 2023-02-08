const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");
const multer = require('multer');
const path = require('path');


//**** multer *////

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    
    filename: function (req, file, cb) {
      
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
  
const upload = multer({ storage: storage });

  //**** multer *////

router.get("/", controller.index);

router.get('/search', controller.search);

router.get("/nosotros", controller.nosotros);

router.get("/contacto", controller.contacto);

router.get("/mediosDePago", controller.mediosDePago);

router.get("/preguntasFrecuentes", controller.preguntasFrecuentes);

router.get("/politicasEnvio", controller.politicasEnvio);

module.exports = router;