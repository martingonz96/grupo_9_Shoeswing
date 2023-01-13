const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
    productCart: (req,res)=> {
    
        res.render('product/productCart')
    },

    productDetail: (req,res)=> {

        //solucion original

    let id = req.params.id

       let product = products.find(product => product.id == id)


       res.render ('product/productDetail', {product})
    
    
    },

    products : (req, res) =>{

        res.render('product/products', {products})
    },

    addProduct:(req,res)=> {
    
        res.render('product/addProduct')
    },

    editProduct:(req, res) => {
        res.render("product/editProduct")
    }
}


module.exports = productController;