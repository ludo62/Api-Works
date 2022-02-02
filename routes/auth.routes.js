// Importation des modules
const router = require('express').Router();
const authController = require('../controllers/auth.controller');
/**
 * @api {post} /login-admin Connexion de l'administrateur
 * @apiName LoginAdmin
 * @apiGroup Auth
 *
 * @apiParam {String} email Email de l'administrateur
 * @apiParam {String} password Mot de passe de l'administrateur
 *
 * @apiSuccess {String} message Message de status
 */
router.post('/login-admin', authController.loginAdmin);

/**
 * @api {post} /register-moderator Enregistrement du moderateur
 * @apiName RegisterModerator
 * @apiGroup Auth
 *
 * @apiParam {String} name Nom de la société
 * @apiParam {String} address Adresse de la société
 * @apiParam {String} postalCode Code postal de la société
 * @apiParam {String} city Ville de la société
 * @apiParam {String} phone Téléphone de la société
 * @apiParam {String} email Email de la société
 * @apiParam {String} password Mot de passe de la société
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {String} id Identifiant du moderateur
 */
// routes pour le moderateur pour créer son compte et se connecter
router.post('/register-moderator', authController.registerModerator);
/**
 * @api {post} /login-moderator Connexion du moderateur
 * @apiName LoginModerator
 * @apiGroup Auth
 *
 * @apiParam {String} email Email du moderateur
 * @apiParam {String} password Mot de passe du moderateur
 *
 * @apiSuccess {String} message Message de status
 */
router.post('/login-moderator', authController.loginModerator);

// Routes pour l'utilisateur pour créer son compte et se connecter
/**
 * @api {post} /register Enregistrement de l'utilisateur
 * @apiName RegisterUser
 * @apiGroup Auth
 *
 * @apiParam {String} email Email de l'utilisateur
 * @apiParam {String} password Mot de passe de l'utilisateur
 *
 * @apiSuccess {String} id Identifiant de l'utilisateur
 */

router.post('/register', authController.registerUser);
/**
 * @api {post} /login Connexion de l'utilisateur
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiParam {String} email Email de l'utilisateur
 * @apiParam {String} password Mot de passe de l'utilisateur
 *
 * @apiSuccess {String} message Message de status
 */
router.post('/login', authController.loginUser);

module.exports = router;
