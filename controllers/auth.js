const UserModel = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
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

		sendToken(user, 200, res);
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(errorResponse("Merci d'entrer un email et un mot de passe valide !", 400));
	}

	try {
		const user = await UserModel.findOne({ email }).select('+password');

		if (!user) {
			return next(errorResponse("Merci d'entrer un email et un mot de passe valide !", 400));
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return res.status(401).json({ success: false, error: 'Mot de passe incorrect !' });
		}

		sendToken(user, 200, res);
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

const sendToken = (user, statusCode, res) => {
	const token = user.getSignedToken();
	res.status(statusCode).json({ success: true, token });
};
