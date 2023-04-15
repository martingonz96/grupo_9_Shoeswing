const { json } = require('sequelize');
const db = require('../../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Users = db.User;

const productApiController = {

    'productList': (req, res) => {
        db.Product.findAll({
            include :  [{ association: "Category"}, { association: "Color"}, { association: "Size"}]
        })
        .then(products => {
            let response = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
                res.json(response);
            })
        },

        'detail': (req, res) => {
            let id = req.params.id;
      
            Promise.all([
              db.Product.findOne({
                where: { id: id }
              }),
              db.Color.findAll(),
              db.Size.findAll()
            ])
                .then(product => {
                    let response = {
                        meta: {
                            status: 200,
                            total: product.length,
                            url: '/api/product/:id'
                        },
                        data: product
                    }
                    res.json(response);
                });
        }

}

module.exports = productApiController;