const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const postController = require('../controllers/post.controller');


// Admin Routes for Post
//router.post('/admin-post', postController.createPost);

// Admin Routes for User
//router.get('/admin-read-users', userController.getAllUsers);


// Admin Routes for Moderator
//router.get('/admin-read-moderator', userController.getAllModerators);
//router.post('/admin-create-moderator', userController.createModerator);

// Moderator Routes for Profil
//router.get('/moderator-profile', authController.getProfile);
//router.update('/moderator-prfile/:id', authController.updateProfile);

// Moderator Routes for Post
//router.get('/moderator-read-posts', postController.getAllPosts);
//router.post('/moderator-post', postController.createPost);

// Moderator Routes for User
//router.get('/moderator-read-users', userController.getAllUsers);


// User Routes for Profile
//router.get('/profile', authController.getProfile);
//router.post('/profile-create', authController.createProfile);
//router.update('/profile/:id', authController.updateProfile);
//router.delete('/profile/:id', authController.deleteProfile);

// User Routes for post
//router.post('/post', postController.createPost);

module.exports = router;
