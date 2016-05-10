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
              res.end('Will send all the proposals to you!');
          })
          .post(function(req, res, next){
              res.end('Will add the proposals: ' + req.body.title 
              		+ '\ndescription: ' + req.body.description
              		+ '\ncategory: ' + req.body.categoryID
              		+ '\nfrom: ' + req.body.firstName + ' ' + req.body.lastName
              		+ '\nwith phone: ' + req.body.phone
              		+ '\nand email: ' + req.body.email);
          })
          .delete(function(req, res, next){
              res.end('Deleting all proposals');
          });

/*
  firstName: "Jane",
  lastName: "Doe",
  email: "a@b.com",
  phone: "123456789",
  title: "Awesome Program",
  categoryID: 1,
  description: "The most wholesome program to ever hit the airwaves"
*/    

module.exports = proposalsRouter;
