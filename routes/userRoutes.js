const express = require ('express');

const router = express.Router();

const usersController = require('../controllers/userController');

const validations = require('../middlewares/validateRegisterMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const guestMiddleware = require('../middlewares/guest');


// registro
router.get('/create', guestMiddleware, usersController.register)

// proceso de registro
router.post('/create', validations ,usersController.createUser);

// login
router.get('/login', guestMiddleware, usersController.login);

// proceso de login
router.post('/login', usersController.loginProcess);

// profile
router.get('/profile', authMiddleware, usersController.profile);

///Logout
router.get('/logout', usersController.logout)

module.exports = router;