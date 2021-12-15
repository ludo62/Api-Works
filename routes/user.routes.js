const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Admin Routes for User
router.get('/admin-read-users', userController.getAllUsers);

// Admin Routes for Moderator
router.get('/admin-read-moderator', userController.getAllModerators);
router.post('/admin-create-moderator', userController.createModerator);
//router.post('/admin-update-moderator/:id', userController.updateModerator);
//router.post('/admin-delete-moderator/:id', userController.deleteModerator);

// Moderator Routes for Profil
//router.get('/moderator-profile', userController.getProfile);
//router.update('/moderator-update-profile/:id', userController.updateProfile);
//router.update('/moderator-delete-profile/:id', userController.deleteProfile);


// Moderator Routes for User
//router.get('/moderator-read-users', userController.getAllUsers);


// User
//router.get('/profile', userController.getProfile);
//router.update('/update-profile/:id', userController.updateProfile);
//router.delete('/delete-profile/:id', userController.deleteProfile);
module.exports = router;
