const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let visitado = products.filter(product => product.category === "visitado")

let oferta = products.filter(product => product.category === "oferta")

const controller = {
    index: (req,res)=> {

        res.render('index', {products: products, visitado:visitado, oferta: oferta})
    },

    login: (req,res)=> {
    
        res.render('user/login')
    },

    //productCart: (req,res)=> {
    
      //  res.render('product/productCart')
   // },

   // productDetail: (req,res)=> {

        //solucion original

  //  let id = req.params.id

   //    let product = products.find(product => product.id == id)


   //    res.render ('productDetail', {product})
    
    
   // },

    

    register:(req,res)=> {
    
        res.render('user/register')
    },

    nosotros:(req,res)=> {
    
        res.render('secFooter/nosotros')
    },

    contacto:(req,res)=> {
    
        res.render('secFooter/contacto')
    },

    mediosDePago:(req,res)=> {
    
        res.render('secFooter/mediosDePago')
    },

    preguntasFrecuentes:(req,res)=> {
    
        res.render('secFooter/preguntasFrecuentes')
    },

    politicasEnvio:(req,res)=> {
    
        res.render('secFooter/politicasEnvio')
    },

    //

};

module.exports = controller;