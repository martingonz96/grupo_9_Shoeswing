const path = require("path");

const controller = {
    index: (req,res)=> {
        res.render('index')
    },

    login: (req,res)=> {
    
        res.render('login')
    },

    productCart: (req,res)=> {
    
        res.render('productCart')
    },

    productDetail: (req,res)=> {
    
        res.render('productDeatil')
    },

    register:(req,res)=> {
    
        res.render('register')
    },

    nosotros:(req,res)=> {
    
        res.render('nosotros')
    },

    contacto:(req,res)=> {
    
        res.render('contacto')
    },

    mediosDePago:(req,res)=> {
    
        res.render('mediosDePago')
    },

    preguntasFrecuentes:(req,res)=> {
    
        res.render('preguntasFrecuentes')
    },

    politicasEnvio:(req,res)=> {
    
        res.render('politicasEnvio')
    },

    addProduct:(req,res)=> {
    
        res.render('addProduct')
    },

};

module.exports = controller;