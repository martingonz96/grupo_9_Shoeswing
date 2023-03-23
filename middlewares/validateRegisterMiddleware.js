
const { body } = require ('express-validator');

const path = require('path');

const validations = [
    body('first_name').notEmpty().withMessage('Escribir un nombre'),
    body('last_name').notEmpty().withMessage('Escribir un apellido'),
    body('email').notEmpty().withMessage('Escribir un email').bail().isEmail().withMessage('Email invalido'),
    body('password').notEmpty().withMessage('Escribir una contrasena'),
    body("passwordConfirmation")
    .notEmpty()
    .withMessage("Confirmar contraseña")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    })
];


module.exports = validations