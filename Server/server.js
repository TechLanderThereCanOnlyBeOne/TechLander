const express = require("express");
const path = require("path");
const app = express();
const cookie = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get("/log", (req, res) => {
	res.send("yo");
});

app.use("*", (req, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.log("err", err);
});
