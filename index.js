var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var port = 1337;

var connection = function(){
	return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'lamascotte',
		socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock'
	});
};

//  app use

// we add to express the body-parser add-o allowing us to read req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static/css', express.static(__dirname + '/assets/css'));
app.use('/static/js', express.static(__dirname + '/assets/js'));
app.use('/static/images', express.static(__dirname + '/assets/images'));

// get on '/index.html'
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//get on 'about.html'
app.get('/about', function(req, res){
	res.sendFile(__dirname + '/views/about.html');
});

// get on 'menu.html'
app.get('/menu', function(req, res){
	res.sendFile(__dirname + '/views/menu.html');
});

// get on 'booking.html'
app.get('/booking', function(req, res){
	res.sendFile(__dirname + '/views/booking.html');
});

// get on 'contact on index.html'
app.get('/#contact', function(req, res){
	res.sendFile(__dirname + '/index.html/#contact');
});

// get on 'credits.html'
app.get('/credits', function(req, res){
	res.sendFile(__dirname + '/views/credits.html');
});

// post on /booking
app.post('/booking', function(req, res){
	var q = "INSERT INTO booking (lastname, date_booking, time_booking, persons, email, tel, infos) VALUES ('"+ req.body.lastname +"', "+ req.body.date_booking +", '"+ req.body.time_booking +"', "+ req.body.persons +", '"+ req.body.email +"', "+ req.body.tel +", '"+ req.body.infos +"')";
	var co = connection();

	co.connect();
	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  console.log(results);
	});
	co.end();

	res.send('Done');
});

// show data on /api/booking
app.get('/api/booking', function(req, res){
	var q = 'SELECT * FROM booking';
	var co = connection();
	
	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  res.send(results);
	});
	co.end();
});

// app listen
app.listen(port, function(){
	console.log('Server listening on port ' + port);
});