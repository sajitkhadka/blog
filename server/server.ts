const bodyParser = require("body-parser");
const path = require("path");

let express = require("express");
let http = require("http");

const app = express();

const server = http.createServer(app);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/out")));

server.on("request", app);

module.exports = server;
