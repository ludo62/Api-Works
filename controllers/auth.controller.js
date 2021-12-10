const User = require('../models/user.model');

// Login and Register users
exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			message: "Merci d'entrer un email et un mot de passe valide",
		});
	}
	try {
		const user = await User.findOne({ email }).select('+password');
		if (!user) {
			return res.status(401).json({
				message: "L'email ou le mot de passe est incorrect",
			});
		}
		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return res.status(401).json({ success: false, error: 'Mot de passe incorrect !' });
		}
		res.status(200).json({
			message: 'Vous êtes connecté',
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.register = async (req, res, next) => {
	try {
		const { email } = req.body;
		const doesExist = await User.findOne({ email });
		if (doesExist) {
			res.status(400).send("L'utilisateur existe déjà");
			return;
		}

		const user = new User(req.body);
		await user.save();
		res.send(user);
	} catch (error) {
		next(error);
	}
};
