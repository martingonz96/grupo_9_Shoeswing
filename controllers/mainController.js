const path = require("path");

const controller = {
    index: (req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },

    login: (req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },

    productCart: (req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },

    productDetail: (req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/productDetail.html"))
    },

    register:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },

    nosotros:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/nosotros.html"))
    },

    contacto:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/contacto.html"))
    },

    mediosDePago:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/mediosDePago.html"))
    },

    preguntasFrecuentes:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/preguntasFrecuentes.html"))
    },

    politicasEnvio:(req,res)=> {
    
        res.sendFile(path.join(__dirname, "../views/politicasEnvio.html"))
    },

};

module.exports = controller;