const { json } = require('sequelize');
const db = require('../../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Users = db.User;

const userApiController = {

    'listUsers': (req, res) => {
        db.User.findAll({
            include :  [{ association: "User_category"}]
        })
        .then(users => {
            let response = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(response);
            })
        },

    'detail': (req, res) => {
        let id = req.params.id;
      
        Promise.all([
            db.User.findOne({
                where: { id: id }
            }),
            db.User_category.findAll()
        ])
        .then(user => {
            let response = {
                meta: {
                    status: 200,
                    total: user.length,
                    url: '/api/user/:id'
                },
                data: user
            }
            res.json(response);
        });
    }

}

module.exports = userApiController;