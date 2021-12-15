const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

// Post with admin

// post with moderator

// read post with user
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
// Create a new post with user
module.exports.createPost = async (req, res) => {
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

	try {
		const post = await newPost.save();
		return res.status(200).json({
			message: 'Votre post a bien été créé',
			post,
		});
	} catch (error) {
		return res.status(400).send(err);
	}
};
