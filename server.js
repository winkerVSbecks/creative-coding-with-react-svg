/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/assets/favicon.ico", function(req, res) {
  res.sendFile(path.join(__dirname, "assets/favicon.ico"));
});

app.get("/exercises.html", function(req, res) {
  res.sendFile(path.join(__dirname, "exercises.html"));
});

app.get("/exercises", function(req, res) {
  res.sendFile(path.join(__dirname, "exercises.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("🖥  Listening at http://localhost:3000");
});
