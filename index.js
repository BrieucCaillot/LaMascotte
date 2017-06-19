// modules & variables
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var port = 1337;

// mysql connection
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

// app get
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
		// get booking.html
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

// app post
	// post on / newsletter
	app.post('/', function(req,res){ 
	    var q = "INSERT INTO newsletter (email) VALUES ('" + req.body.newsletter + "')";
	    var co = connection();
	    co.connect();
	    
	    // Regular Expression for email
	    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	    // Check if input is not null
	    if (req.body.newsletter.length > 0 && req.body.newsletter.match(regExpEmail)) {
	    	co.query(q, function (error, results, fields){
	            if (error) return console.log(error);
	            res.status(201).send("Vous êtes maintenant inscrit à la newsletter du site. Vous receverez désormais sur l'email " + req.body.newsletter.value + " l'actualité de votre restaurant La Mascotte.");
	        	console.log(results);
	        });
	    } else {
			res.status(400).send("L'email rentré n'est pas valide.");
		}

	    co.end();
	});

	// post on /about newsletter
	app.post('/about', function(req,res){ 
	    var q = "INSERT INTO newsletter (email) VALUES ('" + req.body.newsletter + "')";
	    var co = connection();
	    co.connect();
	    
	    // Regular Expression for email
	    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	    // Check if input is not null
	    if (req.body.newsletter.length > 0 && req.body.newsletter.match(regExpEmail)) {
	    	co.query(q, function (error, results, fields){
	            if (error) return console.log(error);
	            res.status(201).send("Vous êtes maintenant inscrit à la newsletter du site. Vous receverez désormais sur l'email " + req.body.newsletter.value + " l'actualité de votre restaurant La Mascotte.");
	        	console.log(results);
	        });
	    } else {
			res.status(400).send("L'email rentré n'est pas valide.");
		}

	    co.end();
	});

	// post on /menu newsletter
	app.post('/menu', function(req,res){ 
	    var q = "INSERT INTO newsletter (email) VALUES ('" + req.body.newsletter + "')";
	    var co = connection();
	    co.connect();
	    
	    // Regular Expression for email
	    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	    // Check if input is not null
	    if (req.body.newsletter.length > 0 && req.body.newsletter.match(regExpEmail)) {
	    	co.query(q, function (error, results, fields){
	            if (error) return console.log(error);
	            res.status(201).send("Vous êtes maintenant inscrit à la newsletter du site. Vous receverez désormais sur l'email " + req.body.newsletter.value + " l'actualité de votre restaurant La Mascotte.");
	        	console.log(results);
	        });
	    } else {
			res.status(400).send("L'email rentré n'est pas valide.");
		}

	    co.end();
	});

	// post on /booking
		// form
		app.post('/booking', function(req, res){
			var q = "INSERT INTO booking (lastname, date_booking, time_booking, persons, email, tel, infos) VALUES ('"+ req.body.lastname +"', '"+ req.body.date_booking +"', '"+ req.body.time_booking +"', "+ req.body.persons +", '"+ req.body.email +"', "+ req.body.tel +", '"+ req.body.infos +"')";
			var co = connection();
			co.connect();

			// Regular Expressions
		    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
		    var regExpText = /^[a-zA-Z ]*$/;
		    var regExpNumber = /^(0|[1-9][0-9]*)$/;
		    var regExpDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
		    var regExpTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
		    
		    // check if form is correctly filled
		    if (req.body.lastname.match(regExpText) && 
		    	req.body.lastname.length >=2 && 
		    	req.body.date_booking.match(regExpDate) && 
		    	req.body.date_booking.length >0 && 
		    	req.body.time_booking.match(regExpTime) && 
		    	req.body.time_booking.length >=3 && 
		    	req.body.persons.match(regExpNumber) && 
		    	req.body.persons.length >0 && 
		    	req.body.email.match(regExpEmail) && 
		    	req.body.email.length >=4 && 
		    	req.body.tel.length >=4 ){
		        co.query(q, function (error, results, fields){
		            if (error) return console.log(error);
		            res.status(201).send('Votre réservation à bien été enregistrée pour ' + req.body.persons + ' personnes au nom de ' + req.body.lastname + ' le ' + req.body.date_booking + ' à ' + req.body.time_booking);
		        	console.log(results);
		        });
		    }

		    // send error lastname 
		    else if (!req.body.lastname.length || !req.body.lastname.match(regExpText)){
				res.status(400).send('Veuillez remplir correctement le champ "Nom" pour enregistrer votre réservation');
				console.log("lastname");
		    }
		    // send error date_booking
		    else if (!req.body.date_booking.length || !req.body.date_booking.match(regExpDate)){
				res.status(400).send('Veuillez remplir correctement le champ "Date" pour enregistrer votre réservation');
				console.log("date_booking");
		    }
		    // send error time_booking
		    else if (!req.body.time_booking.length || !req.body.time_booking.match(regExpTime)){
				res.status(400).send('Veuillez remplir correctement le champ "Heure" pour enregistrer votre réservation');
				console.log("time_booking");
		    }
		    // send error persons
		    else if (!req.body.persons.length || !req.body.persons.match(regExpNumber)){
				res.status(400).send('Veuillez remplir correctement le champ "Personne" pour enregistrer votre réservation');
		    }
		    // send error email
		    else if (!req.body.email.length || !req.body.persons.match(regExpEmail)){
				res.status(400).send('Veuillez remplir correctement le champ "Email" pour enregistrer votre réservation');
		    }
		    // send error tel
		    else if (!req.body.tel.length){
				res.status(400).send('Veuillez remplir correctement le champ "Teléphone" pour enregistrer votre réservation');
		    }

		    else {
		    	res.status(400).send('Une erreur est survenue, veuillez réessayer');
		    }

			co.end();
		});
		// newsletter
		app.post('/booking', function(req,res){ 
		    var q = "INSERT INTO newsletter (email) VALUES ('" + req.body.newsletter + "')";
		    var co = connection();
		    co.connect();
		    
		    // Regular Expression for email
		    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
		    // Check if input is not null
		    if (req.body.newsletter.length > 0 && req.body.newsletter.match(regExpEmail)) {
		    	co.query(q, function (error, results, fields){
		            if (error) return console.log(error);
		            res.status(201).send("Vous êtes maintenant inscrit à la newsletter du site. Vous receverez désormais sur l'email " + req.body.newsletter.value + " l'actualité de votre restaurant La Mascotte.");
		        	console.log(results);
		        });
		    } else {
				res.status(400).send("L'email rentré n'est pas valide.");
			}

		    co.end();
		});

	// post on /credits newsletter
	app.post('/credits', function(req, res){
		var q = "INSERT INTO newsletter (email) VALUES ('" + req.body.newsletter + "')";
	    var co = connection();
	    co.connect();
	    
	    // Regular Expression for email
	    var regExpEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	    // Check if input is not null
	    if (req.body.newsletter.length > 0 && req.body.newsletter.match(regExpEmail)) {
	    	co.query(q, function (error, results, fields){
	            if (error) return console.log(error);
	            res.status(201).send("Vous êtes maintenant inscrit à la newsletter du site. Vous receverez désormais sur l'email " + req.body.newsletter.value + " l'actualité de votre restaurant La Mascotte.");
	        	console.log(results);
	        });
	    } else {
			res.status(400).send("L'email rentré n'est pas valide.");
		}

	    co.end();
	});

// show data
	// show data on /api/booking of form 
	app.get('/api/booking', function(req, res){
		var q = 'SELECT * FROM booking';
		var co = connection();
		
		co.query(q, function (error, results, fields) {
			  if (error) return console.log(error);
			  res.send(results);
		});

		co.end();
	});

	// show data on /api/newsletter 
	app.get('/api/newsletter', function(req, res){
		var q = 'SELECT * FROM newsletter';
		var co = connection();

		co.query(q, function(error, results, fields){
			if (error) return console.log(error);
			res.send(results);
		});
	});

// app listen
	app.listen(port, function(){
		console.log('Server listening on port ' + port);
	});