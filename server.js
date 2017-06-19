var express = require('express');
var app = express();
var opn = require('opn');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler  = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo:true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'));

app.get('/', function (req, res) {
  let lol = "q";
  res.sendFile("./public/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  opn('http://localhost:3000');
});