const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');
const ModeratorModel = require('../models/moderator.model');

// Post with admin
module.exports.readAllPostAdmin = async (req, res) => {
	const admin = await AdminModel.findOne({ _id: req.params.id });
	if (admin) {
		PostModel.find({}, (err, posts) => {
			if (err) {
				return res.status(500).json({
					message: 'Erreur lors de la récupération des posts',
				});
			}
			return res.status(200).json({
				message: 'Récupération des posts réussie',
				posts,
			});
		});
	} else {
		return res.status(401).json({
			message: "Vous n'êtes pas autorisé à accéder à cette page",
		});
	}
};
module.exports.CreatePostAdmin = async (req, res) => {
	const admin = await AdminModel.findOne({ _id: req.params.id });
	if (admin) {
		const newPost = new PostModel({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: req.body.address,
			postalCode: req.body.postalCode,
			city: req.body.city,
			phone: req.body.phone,
			type: req.body.type,
			description: req.body.description,
			address_alert: req.body.address_alert,
		});
		newPost.save((err, post) => {
			if (err) {
				return res.status(500).json({
					message: 'Erreur lors de la création du post',
				});
			}
			return res.status(201).json({
				message: 'Création du post réussie',
				post,
			});
		});
	} else {
		return res.status(401).json({
			message: "Vous n'êtes pas autorisé à accéder à cette page",
		});
	}
};

// post with moderator
module.exports.readPostModerator = async (req, res) => {
	const moderator = await ModeratorModel.findOne({ _id: req.params.id });
	if (moderator) {
		PostModel.find({}, (err, posts) => {
			if (err) {
				return res.status(500).json({
					message: 'Erreur lors de la récupération des posts',
				});
			}
			return res.status(200).json({
				message: 'Récupération des posts réussie',
				posts,
			});
		});
	} else {
		return res.status(401).json({
			message: "Vous n'êtes pas autorisé à accéder à cette page",
		});
	}
};
module.exports.createPostModerator = async (req, res) => {
	const moderator = await ModeratorModel.findOne({ _id: req.params.id });
	if (moderator) {
		const newPost = new PostModel({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: req.body.address,
			postalCode: req.body.postalCode,
			city: req.body.city,
			phone: req.body.phone,
			type: req.body.type,
			description: req.body.description,
			address_alert: req.body.address_alert,
		});
		newPost.save((err, post) => {
			if (err) {
				return res.status(500).json({
					message: 'Erreur lors de la création du post',
				});
			}
			return res.status(201).json({
				message: 'Création du post réussie',
				post,
			});
		});
	} else {
		return res.status(401).json({
			message: "Vous n'êtes pas autorisé à accéder à cette page",
		});
	}
};

// Post with user
module.exports.readPost = async (req, res) => {
	const user = await UserModel.findOne({ _id: req.params.id });
	const post = await PostModel.find({});
	if (user) {
		res.status(200).json({
			message: 'Post',
			post,
		});
	} else {
		res.status(401).json({
			message: 'Veuillez vous connecter pour voir les posts',
		});
	}
};

module.exports.createPost = async (req, res) => {
	const user = await UserModel.findOne({ _id: req.params.id });
	if (user) {
		const newPost = new PostModel({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: req.body.address,
			postalCode: req.body.postalCode,
			city: req.body.city,
			phone: req.body.phone,
			type: req.body.type,
			description: req.body.description,
			address_alert: req.body.address_alert,
		});
		newPost.save((err, post) => {
			if (err) {
				res.status(500).json({
					message: 'Erreur lors de la création du post',
				});
			} else {
				res.status(201).json({
					message: 'Post créé',
					post,
				});
			}
		});
	} else {
		res.status(401).json({
			message: 'Veuillez vous connecter pour créer un post',
		});
	}
};
