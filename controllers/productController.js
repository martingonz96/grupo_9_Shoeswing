const fs = require('fs');
const path = require('path');
const { Association } = require('sequelize');
const { Op } = require('sequelize');
const db = require('../database/models')

const {validationResult} = require('express-validator');


const productController = {
    productCart: (req,res)=> {
    
        res.render('product/productCart')
    },

    productDetail: (req, res) => {
        let id = req.params.id;
      
        Promise.all([
          db.Product.findOne({
            where: { id: id }
          }),
          db.Color.findAll(),
          db.Size.findAll()
        ])
        .then(([product, colors, sizes]) => {
          if (!product) {
            res.status(404).send('Product not found');
          } else {
            res.render('product/productDetail', { product, colors, sizes });
          }
        })
        .catch(error => res.send(error));
      }
      ,

    products : (req, res) =>{

        db.Product.findAll(
        )
        .then(products =>{
            //return res.send(relojes);
            return res.render('product/products', {products})
        })
        .catch(error => res.send(error))   

    },

    productsZapatillas : (req, res) => {
       
      db.Product.findAll(
        {
          where: {type:"zapatilla"}
        }
      )
      .then(products =>{
        //return res.send(relojes);
        return res.render('product/products-zapatillas', {products})
    })
    .catch(error => res.send(error))

    },

    productsRopa : (req, res) => {
       
      db.Product.findAll(
        {
          where: {type:"ropa"}
        }
      )
      .then(products =>{
        //return res.send(relojes);
        return res.render('product/products-ropa', {products})
    })
    .catch(error => res.send(error))

    },

    addProduct: async (req, res) => {
      try {
        const categories = await db.Category.findAll();
        res.render("product/addProduct", {
          title: "Agregar Producto",
          categories: categories,
          errors: {},
        });
      } catch (error) {
        res.send(error);
      }
    },

      store: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
          const categories = await db.Category.findAll();
          return res.render('product/addProduct', {
              errors: resultValidation.mapped(),
              oldData: req.body,
              categories: categories
          });
      }

        try {
          let img;
          if (req.file != undefined) {
            img = req.file.filename;
          } else {
            img = "default-image.png";
          }

          const product = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            release_date: req.body.release_date,
            image: img,
            discount: req.body.discount,
            category_id: req.body.category_id,
            type: req.body.type
          });
          res.redirect('/products');
        } catch (error) {
          res.send(error);
        }
      },

    editProduct:(req, res) => {

        let id = req.params.id
    
        db.Product.findByPk(id, {
          include: ['Category']})
        .then(product => {
          res.render("product/editProduct", {product})
        })
        .catch(error => res.send(error))
        
    },
    
    update: (req, res) =>{
    
        let productId = req.params.id //id que viene por URL
    
        if (req.file != undefined) {
          img = req.file.filename;
        } else {
          img = null; // use null instead of the default image path
        }
            
            db.Product
            .update (
              {
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                description: req.body.description,
                category_id : req.body.category_id,
                type: req.body.type,
                ...(img ? { image: img } : {}), // only update image if it's provided
            },
            {
              where: {id: productId}
            })
            .then(()=> {
              return res.redirect('/products'); // change this line
          })            
          .catch(error => res.send(error))
    
    },    

    // Delete - Delete one product from DB
    destroy: (req, res) => {
      let productId = req.params.id;
  
      db.Product
        .destroy({
          where: { id: productId },
          force: true,
        })
        .then(() => {
          res.redirect('/products');
        })
        .catch((error) => {
          res.send(error);
        });
  }
}


module.exports = productController;