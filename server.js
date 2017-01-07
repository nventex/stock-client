const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.list(process.env.POST || 8080);