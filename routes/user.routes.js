const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Admin Routes for User
router.get('/admin-read-users', userController.getAllUsers);

// Admin Routes for Moderator
//router.get('/admin-read-moderator', userController.getAllModerators);
//router.post('/admin-create-moderator', userController.createModerator);

// Moderator Routes for Profil
//router.get('/moderator-profile', userController.getProfile);
//router.update('/moderator-prfile/:id', userController.updateProfile);

// Moderator Routes for User
//router.get('/moderator-read-users', userController.getAllUsers);

// User Routes for Profile
//router.get('/profile', userController.getProfile);

//router.update('/profile/:id', userController.updateProfile);
//router.delete('/profile/:id', userController.deleteProfile);

// User
//router.get('/profile', userController.getProfile);
module.exports = router;
