// Importation des modules
const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '--' + file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

// Routes pour l'administrateur pour voir tous les posts et créer un post
/**
 * @api {get} /admin-read/ Récupération de tous les posts
 * @apiName GetAllPostsAdmin
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant de l'administrateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Array} posts Liste des posts
 */
router.get('/admin-read/:id', postController.readAllPostAdmin);
/**
 * @api {post} /admin-create/ Création d'un post pour l'administrateur
 * @apiName CreatePostAdmin
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant de l'administrateur
 * @apiParam {String} firstName Prénom de l'administrateur
 * @apiParam {String} lastName Nom de l'administrateur
 * @apiParam {String} address Adresse de l'administrateur
 * @apiParam {String} postalCode Code postal de l'administrateur
 * @apiParam {String} city Ville de l'administrateur
 * @apiParam {String} phone Numéro de téléphone de l'administrateur
 * @apiParam {String} type Type d'alerte
 * @apiParam {String} description Description de l'alerte
 * @apiParam {String} address_alerte Addresse de l'alerte
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Object} post Post créé
 */
router.post('/admin-create/:id', upload.single('picture'), postController.CreatePostAdmin);

// Route pour le moderateur pour voir, creer un post
/**
 * @api {get} /moderator-read/ Récupération de tous les posts
 * @apiName GetAllPostsModerator
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant du moderateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Array} posts Liste des posts
 */
router.get('/moderator-read/:id', postController.readPostModerator);
/**
 * @api {post} /moderator-create/ Création d'un post pour le moderateur
 * @apiName CreatePostModerator
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant du moderateur
 * @apiParam {String} firstName Prénom du moderateur
 * @apiParam {String} lastName Nom du moderateur
 * @apiParam {String} address Adresse du moderateur
 * @apiParam {String} postalCode Code postal du moderateur
 * @apiParam {String} city Ville du moderateur
 * @apiParam {String} phone Numéro de téléphone du moderateur
 * @apiParam {String} type Type d'alerte
 * @apiParam {String} description Description de l'alerte
 * @apiParam {String} address_alerte Addresse de l'alerte
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Object} post Post créé
 */
router.post('/moderator-create/:id', upload.single('picture'), postController.createPostModerator);

// Route pour l'utilisateur pour voir, creer un post
/**
 * @api {get} /read/ Récupération des posts créer par l'utilisateur
 * @apiName GetAllPostsUser
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant de l'utilisateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Array} posts Liste des posts de l'utilisateur
 */
router.get('/read/:id', postController.readPost);
/**
 * @api {post} /post/ Création d'un post pour l'utilisateur
 * @apiName CreatePostUser
 * @apiGroup Post
 *
 * @apiParam {String} id Identifiant de l'utilisateur
 * @apiParam {String} firstName Prénom de l'utilisateur
 * @apiParam {String} lastName Nom de l'utilisateur
 * @apiParam {String} address Adresse de l'utilisateur
 * @apiParam {String} postalCode Code postal de l'utilisateur
 * @apiParam {String} city Ville de l'utilisateur
 * @apiParam {String} phone Numéro de téléphone de l'utilisateur
 * @apiParam {String} type Type d'alerte
 * @apiParam {String} description Description de l'alerte
 * @apiParam {String} address_alerte Addresse de l'alerte
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Object} post Post créé
 */
router.post('/post/:id', upload.single('picture'), postController.createPost);

module.exports = router;
