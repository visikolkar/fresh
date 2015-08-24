var http = require('http');
var mongoose = require('mongoose');
var config = require('./config');

//Connect to the MongoDB
mongoose.connect(config.mongoUrl);

//Initialize the express app
var app = require(./webapp);

//create a server and listen to the configured port
var http = http.createServer(app);
server.listen(config.port, function(){
	console.log('Express server is listening to the port *:' +config.port);
});