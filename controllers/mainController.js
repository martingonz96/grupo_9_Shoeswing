let products = [
    
    {
        id: 1,
        descripcion:'Campera Fila Energy',
        precio:'16.770',
        descuento:10,
        imagen: "/img/campera_fila.jpg"
    },

    {
        id: 2,
        descripcion:'Short Argentina Adidas',
        precio:'12.700',
        descuento:15,
        imagen: "/img/short_adidas.jpg"
    },
        
    {
        id: 3,
        descripcion:'Zapatillas Nike Air Max',
        precio:'23.999',
        descuento:5,
        imagen: "/img/zapatilla_nike.jpg"
    },

    {
        id: 4,
        descripcion:'Remera Wilson ATP',
        precio:'9.890',
        descuento:10,
        imagen: "/img/remera_wilson.jpg"
    }

]

let productsTwo = [
 
    {
        id: 5,
        descripcion:'Botines Puma Attack',
        precio:'13.199',
        descuento:40,
        imagen: "/img/botines_puma.jpg"
    },

    {
        id: 6,
        descripcion:'Gorra Jordan Streetcool',
        precio:'6.999',
        descuento:55,
        imagen: "/img/gorra_jordan.jpg"
    },

    {
        id: 7,
        descripcion:'Jogging Under Armour',
        precio:'8.689',
        descuento:60,
        imagen: "/img/jogging_underarmour.jpeg"
    },

    {
        id: 8,
        descripcion:'Remera Nike Champions',
        precio:'3.999',
        descuento:70,
        imagen: "/img/remera_nike.jpg"
    }
]

const controller = {
    index: (req,res)=> {
        res.render('index', {products: products, productsTwo:productsTwo})
    },

    login: (req,res)=> {
    
        res.render('user/login')
    },

    productCart: (req,res)=> {
    
        res.render('product/productCart')
    },

    productDetail: (req,res)=> {
    
        let id = req.params.id;
        let productDetail;
        // encontrar el detalle del product que machee con el id del param
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                productDetail = products[i];
                break;
            }
        }
        if (!productDetail) {
            for (let i = 0; i < productsTwo.length; i++) {
                if (productsTwo[i].id == id) {
                    productDetail = productsTwo[i];
                    break;
                }
            }
        }
        if (productDetail) {
            res.render('product/productDetail', { productDetail });
        } else {
            res.status(404).send('Product not found');
        }
    },

    //solucion original

    //let id = req.params.id

      // let product = products.find(product => product.id == id)


      // res.render ('productDetail', {product})

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

    addProduct:(req,res)=> {
    
        res.render('product/addProduct')
    },

    editProduct:(req, res) => {
        res.render("product/editProduct")
    }

};

module.exports = controller;