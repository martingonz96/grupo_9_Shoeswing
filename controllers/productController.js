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

    store: (req, res) => {

        let img 

		if(req.file != undefined){

			img = req.file.filename
			
		}else{
			
			img = "/img/default-image.png"
			
		}

        productToCreate = {
			
			id: products[products.length-1].id +1,
			...req.body,
			image: img
			
		}

        products.push(productToCreate);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null , ""));

		res.redirect("/products");

    },

    editProduct:(req, res) => {
        res.render("product/editProduct")
    },

    // Delete - Delete one product from DB
	destroy : (req, res) => {
		
		let id = req.params.id

		let productDelete = products.filter(product => product.id != id)
		
		fs.writeFileSync(productsFilePath, JSON.stringify(productDelete));

		res.redirect('/products')
	}
}


module.exports = productController;