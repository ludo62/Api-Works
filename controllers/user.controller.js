const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');
const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');

// Admin for Users
module.exports.getAllUsers = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const users = await UserModel.find({});
		const alert = await PostModel.find({});
		return res.status(200).json({
			message: 'Liste des utilisateurs',
			users,
			alert,
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à voir la liste des utilisateurs",
		});
	}
};

// Moderator

// User

