const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPost = (req, res) => {
	PostModel.find((err, posts) => {
		if (!err) res.send(posts);
		else console.log('Error to get data : ' + err);
	});
};

module.exports.createPost = async (req, res) => {
	const newPost = new PostModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: req.body.address,
		postalCode: req.body.postalCode,
		city: req.body.city,
		alerts: [],
	});

	try {
		const post = await newPost.save();
		return res.status(201).send(post);
	} catch (err) {
		return res.status(500).send(err);
	}
};

module.exports.updatePost = (req, res) => {};

module.exports.deletePost = (req, res) => {};
