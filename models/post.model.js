const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
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
		type: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		address_alert: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('post', PostSchema);
