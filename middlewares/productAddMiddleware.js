const { body } = require ('express-validator');

const validations = [
  body('name').notEmpty().withMessage('El nombre del producto es requerido'),
  body('price').notEmpty().withMessage('El precio del producto es requerido').isNumeric().withMessage('El precio debe ser un número'),
  body('discount').optional({ nullable: true }),
  body('description').notEmpty().withMessage('La descripción del producto es requerida'),
  body('category_id').notEmpty().withMessage('La categoría del producto es requerida'),
  body('type').notEmpty().withMessage('El tipo de producto es requerido')
];

module.exports = validations;
