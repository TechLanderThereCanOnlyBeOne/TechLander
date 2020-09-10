const express = require("express");
const app = express();
const userController = require("./controllers/userController");

app.use(express.json());

app.post("/login", userController.login, (req, res) => {
	res.status(200).send("data we recieve from db");
});

app.post("/signUp", userController.signUp, (req, res) => {
	res.status(200).send("data we recieve from db");
});

app.use("*", (req, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.log("err", err);
});

app.listen(19000, () => console.log("i am listening"));
