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

app.get('/api/mostpopularcars', function (req, res) {
    const cars= [
      {id:1,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:2,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:3,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:4,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:5,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
      {id:6,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
      {id:7,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
      {id:8,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
       {id:9,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:10,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:11,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:12,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:13,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
      {id:14,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
      {id:15,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
      {id:16,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
      {id:17,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:18,mark:"Нисан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:19,mark:"Лифан",model:"ЛифаноНовая",year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:20,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
      {id:21,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1},
      {id:22,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1},
      {id:23,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1},
      {id:24,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5},
       {id:25,mark:"Лифан",model:"ЛифаноНовая",year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1},
  ];
  res.send(cars);
});

app.get('*', function (req, res) {
  res.sendFile("./public/index.html", { root: __dirname });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  opn('http://localhost:3000');
});