"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var bodyParser = require("body-parser");
var userRouter_1 = require("./routes/userRouter");
var cors_1 = require("cors");
var path_1 = require("path");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
var port = process.env.PORT;
app.use((0, cors_1.default)());
// CORS
app.use(function (req, res, next) {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json());
app.use("/users", userRouter_1.userRouter);
app.get('/', function (req, res) {
    // res.send('Express + TypeScript Server');
    res.sendFile(path_1.default.join(__dirname + '/acasa.html'));
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
