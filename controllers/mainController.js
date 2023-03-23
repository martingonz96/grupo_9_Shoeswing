const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Association } = require('sequelize');

const db = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let visitado = products.filter(product => product.category === "visitado")

let oferta = products.filter(product => product.category === "oferta")

const controller = {
    index: (req,res)=> {

        let enOferta = db.Product.findAll({
            where: {
                category_id : 1
            },
            limit: 4
        });

        let novedades = db.Product.findAll({
            where: {
                category_id : 2
            },
            limit: 4
        })

        Promise
        .all([enOferta, novedades])
        .then(([ofertas, novedades]) => {
            return res.render('index', {ofertas,novedades})})
        .catch(error => res.send(error))
    },

	search: (req, res) => {

        let loQueBusco = req.query.keywords;
    
        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: '%' + loQueBusco + '%'
                }
            }
        })
        .then(products => {
            if (products.length > 0){
                res.render('results', {product: products, loQueBusco: loQueBusco});
            } else {
                res.render('results', {product: [], loQueBusco: loQueBusco});
            }
    
        })
        .catch(err => res.send(err));

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