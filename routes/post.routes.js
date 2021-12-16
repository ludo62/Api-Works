const router = require('express').Router();
const postController = require('../controllers/post.controller');

// Admin
router.get('/admin-read/:id', postController.readAllPostAdmin);
router.post('/admin-create/:id', postController.CreatePostAdmin);

// Moderator
router.get('/moderator-read/:id', postController.readPostModerator);
router.post('/moderator-create/:id', postController.createPostModerator);

// User post and alert
router.get('/read/:id', postController.readPost);
router.post('/post/:id', postController.createPost);

module.exports = router;
