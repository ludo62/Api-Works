// Importation des modules
const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Routes pour l'administrateur pour voir tous les utilisateurs et les modérateurs
/**
 * @api {get} /admin-read-users Récupération de tous les utilisateurs
 * @apiName GetAllUsers
 * @apiGroup User
 *
 * @apiParam {String} email Email de l'administrateur
 * @apiParam {String} password Mot de passe de l'administrateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Array} users Liste des utilisateurs
 */
router.get('/admin-read-users', userController.AllUsers);
/**
 * @api {get} /admin-read-moderator Récupération de tous les moderateurs
 * @apiName GetAllModerators
 * @apiGroup User
 *
 * @apiParam {String} email Email de l'administrateur
 * @apiParam {String} password Mot de passe de l'administrateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Array} moderators Liste des moderateurs
 */
router.get('/admin-read-moderator', userController.getAllModerators);

// Routes pour le moderateur pour voir, modifier et supprimer son profil
/**
 * @api {get} /moderator-profile/ Récupération du profil du moderateur
 * @apiName GetModeratorProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant du moderateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Object} moderator Profil du moderateur
 */
router.get('/moderator-profile/:id', userController.ModeratorProfil);
// Routes pour le moderateur pour voir, modifier et supprimer son profil
/**
 * @api {put} /moderator-update-profile/ Modification du profil du moderateur
 * @apiName UpdateModeratorProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant du moderateur
 * @apiParam {String} name Nom de la société
 * @apiParam {String} address Adresse de la société
 * @apiParam {String} postalCode Code postal de la société
 * @apiParam {String} city Ville de la société
 * @apiParam {String} phone Numéro de téléphone de la société
 * @apiParam {String} email Email de la société
 * @apiParam {String} password Mot de passe de la société
 *
 * @apiSuccess {String} message Message de status
 *
 */
router.put('/moderator-update-profile/:id', userController.ModeratorUpdateProfil);
/**
 * @api {put} /moderator-delete-profile/ Suppression du profil du moderateur
 * @apiName DeleteModeratorProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant du moderateur
 *
 * @apiSuccess {String} message Message de status
 */
router.delete('/moderator-delete-profile/:id', userController.ModeratorDeleteProfil);

/**
 * @api {get} /profile/ Récupération du profil de l'utilisateur
 * @apiName GetUserProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant de l'utilisateur
 *
 * @apiSuccess {String} message Message de status
 * @apiSuccess {Object} user Profil de l'utilisateur
 */
router.get('/profile/:id', userController.Profil);
/**
 * @api {put} /update-profile/ Modification du profil de l'utilisateur
 * @apiName UpdateUserProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant de l'utilisateur
 * @apiParam {String} name Nom de l'utilisateur
 * @apiParam {String} password Mot de passe de l'utilisateur
 *
 * @apiSuccess {String} message Message de status
 */

router.put('/update-profile/:id', userController.updateProfil);

/**
 * @api {delete} /delete-profile/ Suppression du profil de l'utilisateur
 * @apiName DeleteUserProfile
 * @apiGroup User
 *
 * @apiParam {String} id Identifiant de l'utilisateur
 *
 * @apiSuccess {String} message Message de status
 */
router.delete('/delete-profile/:id', userController.deleteProfil);

module.exports = router;
