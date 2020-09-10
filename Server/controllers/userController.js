const userController = {};

userController.login = (req, res, next) => {
	console.log(req.body);
	next();
};

userController.signUp = (req, res, next) => {
	console.log(req.body);
	next();
};

module.exports = userController;
