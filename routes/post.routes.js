const router = require('express').Router();
const postController = require('../controllers/post.controller');

// Admin
//router.get('/admin-read', postController.readAllPost);
//router.post('/admin-create', postController.createPost);



// Moderator
//router.get('/moderator-read', postController.readAllPost);
//router.post('/moderator-create', postController.createPost);



// User
//router.post('/user-create', postController.createPost);


module.exports = router;