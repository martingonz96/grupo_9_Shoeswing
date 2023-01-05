let products = [
    
    {
    id: 1,
    descripcion:'Campera Fila Energy',
    precio:16.770,
    descuento:40,
    imagen: "img/campera_fila.jpg"
    },

    {
        id: 2,
        descripcion:'Short Argentina Adidas',
        precio:12.700,
        descuento:15,
        imagen: "img/short_adidas.jpg"
    },
        
    {
        id: 3,
        descripcion:'Zapatillas Nike Air Max',
        precio:23.999,
        descuento:5,
        imagen: "img/zapatilla_nike.jpg"
    },

    {
        id: 4,
        descripcion:'Remera Wilson ATP',
        precio:9.890,
        descuento:10,
        imagen: "img/remera_wilson.jpg"
    }

]

let productsTwo = [
 
    {
        id: 5,
        descripcion:'Botines Puma Attack',
        precio:13.199,
        descuento:40,
        imagen: "img/botines_puma.jpg"
    },

    {
        id: 6,
        descripcion:'Gorra Jordan Streetcool',
        precio:6.999,
        descuento:55,
        imagen: "img/gorra_jordan.jpg"
    },

    {
        id: 7,
        descripcion:'Jogging Under Armour',
        precio:8.689,
        descuento:60,
        imagen: "img/jogging_underarmour.jpeg"
    },

    {
        id: 8,
        descripcion:'Remera Nike Champions',
        precio:3.999,
        descuento:700,
        imagen: "img/remera_nike.jpg"
    }
]

const controller = {
    index: (req,res)=> {
        res.render('index', {products: products, productsTwo:productsTwo})
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