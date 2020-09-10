const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models/models.ts");
const userController = {};

userController.login = (req, res, next) => {
	if (req.body.username && req.body.password) {
		const query = `SELECT password, jobs FROM users WHERE username = '${req.body.username}';`;
		db.query(query)
			.then((data) => {
				bcrypt
					.compare(req.body.password, data.rows[0].password)
					.then((match) => {
						res.locals.check = match;
						res.locals.jobs = data.rows[0].jobs;
						next();
					})
					.catch((err) => next(err));
			})
			.catch((err) => console.log(err.message));
	}
};

userController.signUp = (req, res, next) => {
	if (req.body.username && req.body.password) {
		bcrypt
			.hash(req.body.password, saltRounds)
			.then((hash) => {
				console.log(`Hash: ${hash}`);
				const query = `INSERT INTO users (username, password, jobs) 
        VALUES ('${req.body.username}','${hash}', '[]');`;
				db.query(query)
					.then(() => {
						res.locals.check = true;
						next();
					})
					.catch((err) => {
						next(err);
					});
			})
			.catch((err) => console.log(err.message));
	}
};

userController.addJobs = (req, res, next) => {
	// req.body.jobs array of jobs
	const query = ``;
	db.query(query).then((data) => console.log(data));
};

module.exports = userController;
