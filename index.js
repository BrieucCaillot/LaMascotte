var express = require('express');
var app = express();
var fs = require('fs');
var port = 1337;

//  app use
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

// app listen
app.listen(port, function(){
	console.log('Server listening on port' + port);
});