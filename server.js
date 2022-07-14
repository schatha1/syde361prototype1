// Run web app in nodejs in order to deploy on heroku

var express = require('express');

// Create app instance with express package
var app = express();

// Let app have access to static files
app.use(express.static(__dirname + '/public'));

// Use process.env.PORT as defined by heroku or 8000 for locally running
var port = process.env.PORT || 8000;

// Host app on port
app.listen(port);

// Log for debugging purposes
//console.log('server on ' + port);