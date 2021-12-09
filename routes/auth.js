const express = require('express');
const { log } = require('npmlog');
const router = express.Router();

const { register, login } = require('../controllers/auth');
const UserModel = require('../models/userModel');

router.route('/register').post(register);

router.route('/login').post(login);

module.exports = router;
