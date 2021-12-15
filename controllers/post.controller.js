const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

// Create a new post
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
