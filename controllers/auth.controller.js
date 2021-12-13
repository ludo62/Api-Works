const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');
const jwt = require('jsonwebtoken');

// Register admin
module.exports.registerAdmin = async (req, res) => {
	const { email, password } = req.body;
	const admin = new AdminModel({ email, password });

	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		admin.save((err, admin) => {
			if (err) {
				return res.status(500).json({
					message: 'Le compte administrateur existe déjà',
				});
			}
			return res.status(201).json({
				message: 'Compte administrateur créé',
				admin: admin,
			});
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à créer un compte administrateur",
		});
	}
};
// Login admin
module.exports.loginAdmin = async (req, res) => {
	const { email, password } = req.body;
	AdminModel.findOne({ email }, (err, admin) => {
		if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
			return res.status(200).json({
				message: 'Connexion réussie',
				admin: admin,
			});
		} else {
			return res.status(401).json({
				message: 'Email ou mot de passe incorrect',
			});
		}
	});
};

// Register Moderators
module.exports.registerModerator = async (req, res) => {
	const { name, address, postalCode, city, phone, email, password } = req.body;
	const moderator = new ModeratorModel({
		name,
		address,
		postalCode,
		city,
		phone,
		email,
		password,
	});
	if ((name, address, postalCode, city, phone, email, password)) {
		moderator.save((err, moderator) => {
			if (err) {
				return res.status(500).json({
					message: 'Le compte modérateur existe déjà',
				});
			}
			return res.status(201).json({
				message: 'Compte modérateur créé',
				moderator: moderator,
			});
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à créer un compte modérateur",
		});
	}
};

// Login Moderators
module.exports.loginModerator = async (req, res) => {
	const { email, password } = req.body;
	ModeratorModel.findOne({ email }, (err, moderator) => {
		if (!email || !password) {
			return res.status(401).json({
				message: 'Email ou mot de passe incorrect',
			});
		}
		if (!moderator) {
			return res.status(401).json({
				message: 'Email ou mot de passe incorrect',
			});
		}
		return res.status(200).json({
			message: 'Connexion réussie',
			moderator: moderator,
		});
	});
};

// User register
module.exports.registerUser = async (req, res) => {
	const { firstName, lastName, address, postalCode, city, email, phone, password } = req.body;

	try {
		const user = await UserModel.create({
			firstName,
			lastName,
			address,
			postalCode,
			city,
			email,
			phone,
			password,
		});
		res.status(201).json({ user: user._id });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
