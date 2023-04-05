const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const multer = require('multer');
const path = require('path');
const validationsProduct = require('../middlewares/productAddMiddleware')


//**** multer *////

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, 'public/img/products')
    },
    
    filename: function (req, file, cb) {
      
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
  
const upload = multer({ storage: storage });

  //**** multer *////



router.get("/productCart", controller.productCart);

router.get("/detail/:id/", controller.productDetail);

router.get("/addProduct", controller.addProduct);
router.post('/addProduct', upload.single('image'),validationsProduct, controller.store);

router.get("/editProduct/:id/", controller.editProduct);
router.put('/editProduct/:id/', upload.single('image'),  controller.update);

router.get("/", controller.products);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', controller.destroy); 

module.exports = router;