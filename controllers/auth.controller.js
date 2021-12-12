const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');

// Admin register
module.exports.registerAdmin = async (req, res) => {
	const email = process.env.ADMIN_EMAIL;
	const password = process.env.ADMIN_PASSWORD;
	try {
		const admin = await AdminModel.findOne({ email });
		if (admin) {
			return res.status(400).json({
				message: "Vous n'avez pas d'autorisation pour acceder a ce compte",
			});
		}
		const newAdmin = new AdminModel({
			email,
			password,
		});
		await newAdmin.save();
		return res.status(201).json({
			message: "Enregistrement de l'administrateur reussi",
			admin: newAdmin._id,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Erreur Serveur',
		});
	}
};
// admin login

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
