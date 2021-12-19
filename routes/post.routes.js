const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');

// Multer configuration
const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '--' + file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

// Admin
router.get('/admin-read/:id', postController.readAllPostAdmin);
router.post('/admin-create/:id', upload.single('picture'), postController.CreatePostAdmin);

// Moderator
router.get('/moderator-read/:id', postController.readPostModerator);
router.post('/moderator-create/:id', upload.single('picture'), postController.createPostModerator);

// User post and alert
router.get('/read/:id', postController.readPost);
router.post('/post/:id', upload.single('picture'), postController.createPost);

module.exports = router;
