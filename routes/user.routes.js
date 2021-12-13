const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// auth admin
router.post('/register-admin', authController.registerAdmin);
router.post('/login-admin', authController.loginAdmin);

// auth moderator
router.post('/register-moderator', authController.registerModerator);
router.post('/login-moderator', authController.loginModerator);

// auth user
router.post('/register', authController.registerUser);

// user display: 'block
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);

module.exports = router;
