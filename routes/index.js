var express = require('express');
var router = express.Router();
var  watson = require('watson-developer-cloud');
  
  var authorization = watson.authorization({
  username: '0bed0607-941b-44ea-aa1d-9055561a3385',
  password: 'HjGVfSihPQ01',
  version: 'v1'
  });

  var params = {
  // URL of the resource you wish to access
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
  };

router.get('/token', function(req, res) {
	authorization.getToken(params, function (err, token) {
  		if (err) {
    		console.log('Error retrieving token: ', err);
      		res.status(500).send('Error retrieving token');
      		return;
  		}
	  	else
  		{
  			console.log("Inside stt-token.js. Token - ", token);
  			res.send(token);
  		}
  		});
});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
