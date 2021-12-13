const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			category: ['voierie', 'accident', 'travaux', 'incendie', 'stationnement'],
			required: [true, "Le type de l'alerte est obligatoire"],
		},
		adresse: {
			type: String,
			required: [true, "L'adresse est obligatoire"],
		},
		description: {
			type: String,
			required: [true, 'La description est obligatoire'],
		},
		picture: {
			type: String,
		},
		video: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Alert', AlertSchema);
