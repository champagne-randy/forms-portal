var express = require('express'),
	proposalsRouter 	= express.Router(),
	bodyParser  = require('body-parser');

// use Express.router to write cleaner code
proposalsRouter.use(bodyParser.json());

// route config: /proposals
proposalsRouter.route('/')
          .all(function(req,res,next) {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              next();
          })
          .get(function(req,res,next){
              res.end('Will send all the promotions to you!');
          })

module.exports = proposalsRouter;
