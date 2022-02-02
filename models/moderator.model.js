const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const jwt = require('jsonwebtoken');

const ModeratorSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	zipCode: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: [isEmail, 'Merci de fournir un email valide'],
	},
	password: {
		type: String,
		required: true,
	},
});

ModeratorSchema.pre('save', async function (next) {
	try {
		if (this.isNew) {
			const salt = await bcrypt.genSalt(12);
			const hashedPassword = await bcrypt.hash(this.password, salt);
			this.password = hashedPassword;
		}
	} catch (error) {
		next(error);
	}
});

ModeratorSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

ModeratorSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

module.exports = mongoose.model('Moderator', ModeratorSchema);
