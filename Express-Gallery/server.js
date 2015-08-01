var express = require('express');

var config = require('./config/config.json');
var app = express();

//var session = require('express-session');

var bodyparser = require('body-parser');
var path = require('path');

//app.use(bodyParser.urlencoded());
app.set('views', path.resolve(__dirname, 'views'));
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res){
  res.render('index');
});

app.listen(3000, function(){
});

//var server = app.listen(config.port, displayServer);