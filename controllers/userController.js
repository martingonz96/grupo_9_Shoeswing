const bcryptjs = require('bcryptjs');

const fs = require('fs');
const path = require('path');

const {validationResult} = require('express-validator');

const user = require('../models/users')

module.exports = {

    register:(req,res)=> {
    
        res.render('user/register')
    },

    createUser: (req, res)=> {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0) {
            return res.render('user/register', {
                errors : resultValidation.mapped(),
                oldData : req.body
            });
            
        }
        let userInDb = user.findByField('email', req.body.email);

        if(userInDb){
            return res.render('user/register', {
                errors : {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData : req.body
            })
        }

        let userCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            passwordConfirmation: bcryptjs.hashSync(req.body.passwordConfirmation, 10)
        }

        let userCreated = user.create(userCreate);

        return res.redirect('/login')
    },

    login: (req,res)=> {
    
        res.render('user/login')
    },

    loginProcess : (req, res)=>{
        let userToLog = user.findByField('email', req.body.email);

        
        if(userToLog){
            let PassOkay = bcryptjs.compareSync(req.body.password, userToLog.password)
          if (PassOkay){
            delete userToLog.password;
            req.session.userLogged = userToLog;

            if(req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
            }
            return res.redirect('profile');
          }
          return res.render('user/login', {
            errors:{
             email: {
                msg: 'credenciales erroneas'
             }
        }
    });
        }
        
        return res.render('user/login', {
            errors:{
             email: {
                msg: 'No se encuentra este email'
             }
        }
    });
    },
    profile: (req, res) => {

        console.log(req.cookies.userEmail)
        res.render('user/profile',{
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/login')
      }
}