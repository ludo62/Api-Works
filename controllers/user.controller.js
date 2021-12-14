const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');
const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');

// Admin for Users
module.exports.getAllUsers = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const users = await UserModel.find({});
		const posts = await PostModel.find({});
		return res.status(200).json({
			message: 'Liste des utilisateurs',
			users,
			posts,
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à voir la liste des utilisateurs",
		});
	}
};

// Moderator

// User
module.exports.createPost = async (req, res) => {
	const user = await UserModel.findOne({ _id: req.params.id });
	if (!user) {
		return res.status(400).json({
			success: false,
			message: 'User not found',
		});
	}
	const post = await PostModel.create({
		type: req.body.type,
		description: req.body.description,
		address: req.body.address,
		user: user._id,
	});
	return res.status(201).json({
		success: true,
		message: 'Votre alerte a été créée',
		user: user,
		post: post,
	});
};
