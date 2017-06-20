var express = require('express');
var app = express();
var opn = require('opn');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
var compiler  = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo:true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'));

let cars= [
      {id:1,mark:"Лифан",model:"ЛифаноНовая",watch:101,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:2,mark:"Нисан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:3,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:4,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:5,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:6,mark:"Лифан",model:"ЛифаноНовая",watch:105,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:7,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:8,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
       {id:9,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:10,mark:"Нисан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:11,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:12,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:13,mark:"Лифан",model:"ЛифаноНовая",watch:110,year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:14,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:15,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:16,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:17,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:18,mark:"Нисан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:19,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:2000,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:20,mark:"Лифан",model:"ЛифаноНовая",watch:120,year:1950,cost:2000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:21,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Ручное",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:22,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Дизель",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:23,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:30000,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
      {id:24,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:5,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
       {id:25,mark:"Лифан",model:"ЛифаноНовая",watch:100,year:1950,cost:1000,transmission:"Автоматика",enginesType:"Бензин",mileage:100,amount:1,photo:'https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg'},
  ];

app.get('/api/cars',function (req, res) {
  res.send(cars);
})


// app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({limit: '500mb', extended: true})

app.post('/api/changecar', urlencodedParser, function (request, response) {
     for(let i =0;i<cars.length;i++){
    if(cars[i].id==request.query.id){
      cars[i].mark=request.query.mark;
      cars[i].model=request.query.model;
      cars[i].year=request.query.year;
      cars[i].cost=request.query.cost;
      cars[i].transmission=request.query.transmission;
      cars[i].enginesType=request.query.enginesType;
      cars[i].amount=request.query.amount;
      cars[i].mileage=request.query.mileage;
      cars[i].watch=request.query.watch;
      cars[i].photo=request.body.photo;
      //var decodedFile = new Buffer(request.body.photo, 'base64');
      break;
    }
  }
  response.send(cars);
});


app.get('/api/deletecar', function (request, response) {
  let newCars=[];
     for(let i =0;i<cars.length;i++){
    if(cars[i].id!=request.query.id){
      newCars.push(cars[i]);
    }
  }
  cars=newCars;
  response.send(newCars);
});



app.get('/api/mostpopularcars', function (req, res) {



  cars.sort(function(a,b){
    return b.watch-a.watch;
  })

  let popularCars = [];

  for(let i=0;i<25;i++){
    popularCars.push(cars[i]);
  }

  res.send(popularCars);
});


function findCar(id) {
  let car;
 for(let i = 0 ; i<cars.length;i++){
    if (cars[i].id==id){
      car=cars[i];
      break;
    }
 }
 return car;
}

app.get('/api/car' , function(req, res) {
 const id = req.query.id;
  const car = findCar(id);
  res.send(car);
});

app.get('*', function (req, res) {
  res.sendFile("./public/index.html", { root: __dirname });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  opn('http://localhost:3000');
});