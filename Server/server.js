const express = require("express");
const path = require("path");
const app = express();
const cookie = require("cookie-parser");

app.use(express.json());
// app.use(express.urlencoded());
// app.use(cookieParser());

app.get("/logy", (req, res) => {
	// res._bodyInit.freedom = "yo baby is this working????";
	// console.log(res);
	res.status(405).send("helyyodjc aubwehfbwerkhbff");
});

app.use("*", (req, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.log("err", err);
});

app.listen(19000, () => console.log("i am listening"));
