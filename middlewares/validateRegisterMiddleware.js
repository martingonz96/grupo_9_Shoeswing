
const { body } = require ('express-validator');

const path = require('path');

const validations = [
    body('nombre').notEmpty().withMessage('Escribir un nombre'),
    body('apellido').notEmpty().withMessage('Escribir un apellido'),
    body('email').notEmpty().withMessage('Escribir un email').bail().isEmail().withMessage('Email invalido'),
    body('fechaDeNacimiento').notEmpty().withMessage('Escribir una fecha'),
    body('domicilio').notEmpty().withMessage('Escribir un domicilio'),
    body('password').notEmpty().withMessage('Escribir una contrasena')
];


module.exports = validations