// server.js

// BASE SETUP
// =============================================================================
console.log('starting');
// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var DDPClient = require("ddp");

var ddpclient = new DDPClient({
  host: "localhost",
  port: 3000,
  /* optional: */
  auto_reconnect: true,
  auto_reconnect_timer: 500,
  use_ssl: false,
  maintain_collections: true // Set to false to maintain your own collections.
});

ddpclient.connect(function(error) {
  if (error) {
    console.log('DDP connection error!');
    return;
  }

  setTimeout(function () {
    ddpclient.call('createHealthCheckResult',  {"data":"my result"},
      		function (err, result) { 
        		console.log('called function, result: ' + result);
      		},
      		function () {              // callback which fires when server has finished
        		console.log('updated');
      		}
    	);
  }, 3000);


  console.log('connected!');
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

router.use(function(req, res, next){
	console.log('run middleware validation');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.route('/exam')
	.post(function(req, res) {
		console.log('entering post');
		if(ddpclient === 'undefined'){
			console.log('ddpclient not working');
		}else{
			console.log('ddpclinet is ok?');
		}

		ddpclient.call('createHealthCheckResult',  {"data":"my result"},
      		function (err, result) { 
        		console.log('called function, result: ' + result);
      		},
      		function () {              // callback which fires when server has finished
        		console.log('updated');
      		}
    	);

		res.json({ message: 'you posted a result!' });	
	})
	.get(function(req, res){
		res.json({message: 'you got a result'})
	});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
