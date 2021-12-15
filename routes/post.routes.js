const router = require('express').Router();
const postController = require('../controllers/post.controller');

// Admin
//router.get('/admin-read', postController.readAllPost);
//router.post('/admin-create', postController.createPost);

// Moderator
//router.get('/moderator-read', postController.readAllPost);
//router.post('/moderator-create', postController.createPost);

// User post and alert
//router.get('/read', postController.readPost);
router.post('/post/:id', postController.createPost);

module.exports = router;
