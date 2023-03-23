const bcryptjs = require('bcryptjs');
const bcrypt = require('bcrypt')

const fs = require('fs');
const path = require('path');
const db = require('../database/models');


const {validationResult} = require('express-validator');

const user = require('../models/users')

module.exports = {

    register:(req,res)=> {
    
        res.render('user/register')
    },

    createUser: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('user/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        try {
            const userInDb = await db.User.findOne({
                where: { email: req.body.email }
            });

            if (userInDb) {
                return res.render('user/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const userCreate = {
            ...req.body,
            password: hashedPassword,
            user_category_id: 2
             };

            const userCreated = await db.User.create(userCreate);

            return res.redirect('/login');
        } catch (error) {
            console.error(error);
            return res.render('error', {
                message: 'Error al crear el usuario',
                error
            });
        }
    },

    login: (req,res)=> {
    
        res.render('user/login')
    },

    loginProcess : async (req, res) => {
          const resultValidation = validationResult(req);
      
          if (resultValidation.errors.length > 0) {
            return res.render('user/login', {
              errors: resultValidation.mapped(),
              oldData: req.body,
            });
          }
      
          try {
            const user = await db.User.findOne({
              where: { email: req.body.email },
            });
      
            if (!user) {
              return res.render('user/login', {
                errors: {
                  email: {
                    msg: 'No se encuentra este email',
                  },
                },
                oldData: req.body,
              });
            }
      
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);;
      
            if (!isPasswordCorrect) {
              return res.render('user/login', {
                errors: {
                  email: {
                    msg: 'Credenciales incorrectas',
                  },
                },
                oldData: req.body,
              });
            }
      
            delete user.password;
            req.session.userLogged = user;
      
            if (req.body.remember_user) {
              res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 * 24 });
            }
      
            return res.redirect('/profile');
          } catch (error) {
            console.error(error);
            return res.render('error', {
              message: 'Error en el proceso de login',
              error,
            });
          }
        },

        profile: (req, res) => {
            console.log(req.cookies.userEmail);
            res.render('user/profile', {
              user: req.session.userLogged,
            });
          },
        
          logout: (req, res) => {
            res.clearCookie('userEmail');
            req.session.destroy();
            return res.redirect('/login');
          }
}