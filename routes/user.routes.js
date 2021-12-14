const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const postController = require('../controllers/post.controller');

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
//router.post('/profile-create', userController.createProfile);
//router.update('/profile/:id', userController.updateProfile);
//router.delete('/profile/:id', userController.deleteProfile);

// User Routes for post
router.post('/post/:id', userController.createPost);

module.exports = router;
