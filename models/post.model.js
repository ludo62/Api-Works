const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
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
		date_alert: {
			type: String,
			required: true,
		},
		horaire_alert: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('post', PostSchema);
