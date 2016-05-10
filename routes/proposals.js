var express = require('express'),
	proposalsRouter 	= express.Router(),
	bodyParser  = require('body-parser');

// use Express.router to write cleaner code
proposalsRouter.use(bodyParser.json());


/*
*   Proposals Contract:
*
*   firstName: "Jane",
*   lastName: "Doe",
*   email: "a@b.com",
*   phone: "123456789",
*   title: "Awesome Program",
*   categoryID: 1,
*   description: "The most wholesome program to ever hit the airwaves"
*/   


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
              		+ '\nand email: ' + req.body.email
              );
          });
/*
  temporarily disabling DELETE route          
*/
          //.delete(function(req, res, next){
          //    res.end('Deleting all proposals');
          //});


// route config: /proposals/:propId
proposalsRouter.route('/:propId')
          .all(function(req,res,next) {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              next();
          })
          .get(function(req,res,next){
              res.end('Will send details of the proposal: ' + req.params.propId +' to you!');
          })
          .put(function(req, res, next){
              res.write('Updating the proposal: ' + req.params.propId + '\n');
              res.end('Will update the proposal: ' + req.body.title
                  + '\nwith description: ' + req.body.description
                  + '\ncategory: ' + req.body.categoryID
                  + '\nfrom: ' + req.body.firstName + ' ' + req.body.lastName
                  + '\nwith phone: ' + req.body.phone
                  + '\nand email: ' + req.body.email
              );
          });

/*
  temporarily disabling DELETE route          
*/
          //.delete(function(req, res, next){
          //    res.end('Deleting proposal: ' + req.params.propId);
          //});

 

module.exports = proposalsRouter;
