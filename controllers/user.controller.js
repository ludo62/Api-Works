const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');
const UserModel = require('../models/user.model');

// Admin for Users
module.exports.getAllUsers = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const users = await UserModel.find({});
		return res.status(200).json({
			message: 'Liste des utilisateurs',
			users,
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à voir la liste des utilisateurs",
		});
	}
};
// Admin for Moderators
module.exports.getAllModerators = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const moderator = await ModeratorModel.find({});
		return res.status(200).json({
			message: 'Liste des modérateurs',
			moderator,
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à voir la liste des utilisateurs",
		});
	}
};
module.exports.createModerator = async (req, res) => {
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
// Moderator

// User
