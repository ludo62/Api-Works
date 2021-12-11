const UserModel = require('../models/user.model');
const objectID = require('mongoose').ObjectID;

module.exports.getAllUsers = async (req, res) => {
	const users = await UserModel.find().select('-password');
	res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
	const user = await UserModel.findById(req.params.id).select('-password');

	try {
		if (!user) {
			return res.status(404).json({
				message: 'Utilisateur non trouvé',
			});
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({
			message: 'Utilisateur non trouvé',
		});
	}
};
