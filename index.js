var express = require("express");
var app = express();

app.use(express.json());

require("./src/handler")(app);

var { getListenConsole } = require('./src/functions/getListenConsole')
var port = process.env.PORT || 3000;

app.listen(port, () => { getListenConsole(port) });

module.exports = app;
