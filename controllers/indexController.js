const { json } = require('sequelize');
const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Users = db.User;

const indexController = {
    'listUsers': (req, res) => {
        db.User.findAll({
            include :  [{ association: "User_category"}]
        })
            .then(users => {
                res.json(users)
            })
        },

    'productList': (req, res) => {
        db.Product.findAll({
            include :  [{ association: "Category"}, { association: "Color"}, { association: "Size"}]
        })
            .then(products => {
                res.json(products)
            })
        }

}

module.exports = indexController;