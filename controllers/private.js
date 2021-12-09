exports.getPrivateData = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'Vous avez acces à vos données !',
	});
};
