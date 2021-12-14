const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const ObjectID = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
	{
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
		postalCode: {
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
			validate: [isEmail, 'Merci de renseigner une adresse email valide'],
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', async function (next) {
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

userSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
