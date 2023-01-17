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

        let id = req.params.id
    
        let product = products.find(product => {
            return product.id == id
         })
    
        res.render("product/editProduct", {product})
    },
    
    update: (req, res) =>{
    
        let id = req.params.id //id que viene por URL
        let productToEdit = products.find(product => product.id == id)
    
        let img 
    
        if(req.file != undefined){
    
            img = req.file.filename
    
        }else{
    
            img = productToEdit.image
                
        }
            
            productToEdit = {
                id: productToEdit.id,
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                description: req.body.description,
                image: img
            }
    
        let newProduct = products.map(product => {
    
            if(product.id == productToEdit.id){
    
                return product = {...productToEdit}
            }
    
            return product;
        })
    
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct));
    
        res.redirect("/products");
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