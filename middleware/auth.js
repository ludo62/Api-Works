const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}
	if (!token) {
		return next(new errorResponse("Vous n'etes pas connecté !", 401));
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await UserModel.findById(decoded.id);

		if (!user) {
			return next(new errorResponse('Utilisateur introuvable !', 404));
		}

		req.user = user;

		next();
	} catch {
		return next(new errorResponse("Vous n'etes pas connecté !", 401));
	}
};
