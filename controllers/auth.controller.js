const UserModel = require('../models/user.model');


// Admin sign up


module.exports.signUp = async (req, res) => {
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
		res.status(201).json({ user: user._id });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
