const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			category: ['voierie', 'accident', 'travaux', 'incendie', 'stationnement'],
			required: [true, "Le type de l'alerte est obligatoire"],
		},
		address: {
			type: String,
			required: [true, "L'adresse est obligatoire"],
		},
		description: {
			type: String,
			required: [true, 'La description est obligatoire'],
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Alert', AlertSchema);
