const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');
const jwt = require('jsonwebtoken');

// Login admin
module.exports.loginAdmin = async (req, res) => {
	const { email, password } = req.body;
	const token = jwt.sign(
		email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD,
		process.env.JWT_SECRET
	);
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const admin = await AdminModel.findOne({ email });
		if (!admin) {
			return res.status(400).json({
				message: "Vous n'etes pas autorisé à vous connecter avec ce compte",
			});
		}
		return res.status(200).json({
			message: 'Connexion réussie',
			token,
		});
	}
	return res.status(401).json({
		message: "Vous n'etes pas autorisé à créer un compte admin",
	});
};

// Register Moderators
module.exports.registerModerator = async (req, res) => {
	const { email, password } = req.body;
	const token = jwt.sign(email, password);
	const moderator = await ModeratorModel.findOne({ email });
	if (moderator) {
		return res.status(400).json({
			message: 'Votre compte est déjà enregistré',
		});
	}
	const newModerator = new ModeratorModel({
		email,
		password,
	});
	await newModerator.save();
	return res.status(200).json({
		message: 'Compte créé',
		token,
	});
};

// Login Moderators
module.exports.loginModerator = async (req, res) => {
	const { email, password } = req.body;
	const token = jwt.sign(email, password);
	const moderator = await ModeratorModel.findOne({ email });
	if (moderator) {
		return res.status(200).json({
			message: 'Connexion réussie',
			token,
		});
	}
	return res.status(401).json({
		message: "Vous n'etes pas autorisé à vous connecter avec ce compte",
	});
};

// User register
module.exports.registerUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const token = jwt.sign(email, password);
		const user = await UserModel.findOne({ email });
		if (user) {
			return res.status(400).json({
				message: 'Votre compte est déjà enregistré',
			});
		}
		const newUser = new UserModel({
			email,
			password,
		});
		await newUser.save();
		return res.status(200).json({
			message: 'Compte créé',
			token,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Un problème est survenu lors de la création du compte',
		});
	}
};

// User login
module.exports.loginUser = async (req, res) => {
	const { email, password } = req.body;
	const token = jwt.sign(email, password);
	const user = await UserModel.findOne({ email });
	if (user) {
		return res.status(200).json({
			message: 'Connexion réussie',
			token,
		});
	}
	return res.status(401).json({
		message: 'Un problème est survenu lors de la connexion',
	});
};
