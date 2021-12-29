require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const ModeratorModel = require('../models/moderator.model');
const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const AdminModel = require('../models/admin.model');

// sendgrid
const SENDGRID_API_KEY = process.env.API_KEYS;
sgMail.setApiKey(SENDGRID_API_KEY);

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
			date_alert: req.body.date_alert,
			horaire_alert: req.body.horaire_alert,
			picture: req.file.path,
		});
		const msg = {
			to: process.env.MESSAGE_TO,
			from: process.env.MESSAGE_FROM,
			subject: process.env.SUBJECT,
			text: "Une alerte viens d'être créée",
			html: "<strong>Une alerte viens d'être créée</strong>",
		};
		sgMail.send(msg);
		newPost.save(newPost);
		if (newPost) {
			return res.status(201).json({
				message: 'Post créé',
				post: newPost,
				msg,
			});
		}
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
			date_alert: req.body.date_alert,
			horaire_alert: req.body.horaire_alert,
			picture: req.file.path,
		});
		const msg = {
			to: process.env.MESSAGE_TO,
			from: process.env.MESSAGE_FROM,
			subject: process.env.SUBJECT,
			text: "Une alerte viens d'être créée",
			html: "<strong>Une alerte viens d'être créée</strong>",
		};
		sgMail.send(msg);
		newPost.save(newPost);
		if (newPost) {
			return res.status(201).json({
				message: 'Post créé',
				post: newPost,
				msg,
			});
		}
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
			date_alert: req.body.date_alert,
			horaire_alert: req.body.horaire_alert,
			picture: req.file.path,
		});
		const msg = {
			to: process.env.MESSAGE_TO,
			from: process.env.MESSAGE_FROM,
			subject: process.env.SUBJECT,
			text: "Une alerte viens d'être créée",
			html: "<strong>Une alerte viens d'être créée</strong>",
		};
		sgMail.send(msg);
		newPost.save(newPost);
		if (newPost) {
			return res.status(201).json({
				message: 'Post créé',
				post: newPost,
				msg,
			});
		}
	} else {
		return res.status(401).json({
			message: 'Veuillez vous connecter pour créer un post',
		});
	}
};
