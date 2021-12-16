const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Admin Routes for User
router.get('/admin-read-users', userController.AllUsers);
router.get('/admin-read-moderator', userController.getAllModerators);

// Moderator Routes for Profil
router.get('/moderator-profile/:id', userController.ModeratorProfil);
router.put('/moderator-update-profile/:id', userController.ModeratorUpdateProfil);
router.delete('/moderator-delete-profile/:id', userController.ModeratorDeleteProfil);

// User
router.get('/profile/:id', userController.Profil);
router.put('/update-profile/:id', userController.updateProfil);
router.delete('/delete-profile/:id', userController.deleteProfil);

module.exports = router;
