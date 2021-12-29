const ModeratorModel = require('../models/moderator.model');
const UserModel = require('../models/user.model');

// Admin for Users
module.exports.AllUsers = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		UserModel.find({}, (err, users) => {
			if (err) {
				return res.status(500).json({
					message: 'Erreur lors de la récupération des utilisateurs',
				});
			}
			return res.status(200).json({
				message: 'Utilisateurs récupérés',
				users,
			});
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à récupérer les utilisateurs",
		});
	}
};
// Admin for Moderators
module.exports.getAllModerators = async (req, res) => {
	const { email, password } = req.body;
	if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
		const moderator = await ModeratorModel.find({});
		return res.status(200).json({
			message: 'Liste des modérateurs',
			moderator,
		});
	} else {
		return res.status(401).json({
			message: "vous n'êtes pas autorisé à voir la liste des utilisateurs",
		});
	}
};
// Moderator
module.exports.ModeratorProfil = async (req, res) => {
	const moderator = await ModeratorModel.findById(req.params.id);
	if (moderator) {
		return res.status(200).json({
			message: 'Profil du modérateur',
			moderator,
		});
	}
	return res.status(404).json({
		message: 'Modérateur non trouvé',
	});
};
module.exports.ModeratorUpdateProfil = async (req, res) => {
	const { name, address, postalCode, city, phone, email, password } = req.body;
	const updateModerator = await ModeratorModel.findByIdAndUpdate(req.params.id, {
		name,
		address,
		postalCode,
		city,
		phone,
		email,
		password,
	});
	if (updateModerator) {
		return res.status(200).json({
			message: 'Votre profil a été mis à jour',
		});
	}
	return res.status(404).json({
		message: 'Modérateur non trouvé',
	});
};
module.exports.ModeratorDeleteProfil = async (req, res) => {
	const deleteModerator = await ModeratorModel.findByIdAndDelete(req.params.id);
	if (deleteModerator) {
		return res.status(200).json({
			message: 'Votre profil a été supprimé',
		});
	}
	return res.status(404).json({
		message: 'Modérateur non trouvé',
	});
};
// User
module.exports.Profil = async (req, res) => {
	const user = await UserModel.findById(req.params.id);
	if (user) {
		return res.status(200).json({
			message: 'Votre profil',
			user,
		});
	}
	return res.status(404).json({
		message: 'Utilisateur non trouvé',
	});
};
module.exports.updateProfil = async (req, res) => {
	const { email, password } = req.body;
	const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {
		email,
		password,
	});
	if (updateUser) {
		return res.status(200).json({
			message: 'Votre profil a été mis à jour',
		});
	}
	return res.status(404).json({
		message: 'Utilisateur non trouvé',
	});
};
module.exports.deleteProfil = async (req, res) => {
	const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
	if (deleteUser) {
		return res.status(200).json({
			message: 'Votre profil a été supprimé',
		});
	}
	return res.status(404).json({
		message: 'Utilisateur non trouvé',
	});
};
