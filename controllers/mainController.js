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
	search: (req, res) => {

		let loQueBusco = req.query.keywords;
        let resultados = []

		for (let i = 0; i < products.length; i++) {
			if (products[i].name.toLowerCase().includes(loQueBusco.toLowerCase())) {
				resultados.push(products[i]);
			}
    }
    res.render('results', {resultados: resultados, loQueBusco: loQueBusco});
	},    

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