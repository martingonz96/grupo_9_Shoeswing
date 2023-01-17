const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const multer = require('multer');
const path = require('path');


//**** multer *////

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/products')
    },
    filename: function (req, file, cb) {
      
const uniqueSuffix = Date.now() + path.extname(file.originalname)+ '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage });

  //**** multer *////



router.get("/productCart", controller.productCart);

router.get("/detail/:id/", controller.productDetail);

router.get("/addProduct", controller.addProduct);
//router.post('/addProduct', upload.single('image'),  productsController.store)

router.get("/editProduct", controller.editProduct);
//router.put('/edit/:id', upload.single('image'),  productsController.update) 

router.get("/", controller.products)

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', controller.destroy); 

module.exports = router;