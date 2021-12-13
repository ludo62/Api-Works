const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');
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
					error: err,
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
// Login Moderators

// User register
module.exports.signUp = async (req, res) => {
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
