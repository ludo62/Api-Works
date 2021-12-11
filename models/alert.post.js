const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			category: ['voierie', 'accident', 'travaux', 'incendie', 'stationnement'],
			required: [true, "Le type de l'alerte est obligatoire"],
		},
		description: {
			type: String,
			required: [true, 'La description est obligatoire'],
			minlength: [20, 'La description doit contenir au moins 20 caractères'],
			maxlength: [500, 'La description ne doit pas dépasser 500 caractères'],
		},
		horaire: {
			type: String,
			required: [true, "L'horaire est obligatoire"],
		},
		adresse: {
			type: String,
			required: [true, "L'adresse est obligatoire"],
		},
		picture: {
			type: String,
			required: [true, 'La photo est obligatoire'],
			default: '',
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: [true, "L'utilisateur est obligatoire"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Alert', AlertSchema);
