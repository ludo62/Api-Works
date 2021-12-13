const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const ModeratorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 50,
	},
	address: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 50,
	},
	postalCode: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 50,
	},
	city: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 50,
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

module.exports = mongoose.model('Moderator', ModeratorSchema);
