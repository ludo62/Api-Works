const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth.controller');


// Route For Admin

// Route For Moderator

// Route for Users
router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
