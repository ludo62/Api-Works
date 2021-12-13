const router = require('express').Router();
const authController = require('../controllers/auth.controller');


// auth admin
router.post('/register-admin', authController.registerAdmin);
router.post('/login-admin', authController.loginAdmin);

// auth moderator
router.post('/register-moderator', authController.registerModerator);
router.post('/login-moderator', authController.loginModerator);

// auth user
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);


module.exports = router;