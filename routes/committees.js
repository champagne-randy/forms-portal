var express = require('express'),
	committeesRouter 	= express.Router(),
	bodyParser  = require('body-parser');

// use Express.router to write cleaner code
committeesRouter.use(bodyParser.json());


/*
*   Committee Registration Contract:
*
*   firstName: "Jane",
*   lastName: "Doe",
*   email: "a@b.com",
*   phone: "123456789",
*   committeeId: 1
*/   


// route config: /committees
committeesRouter.route('/')
          .all(function(req,res,next) {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              next();
          })
          .get(function(req,res,next){
              res.end('Will send all the committees and their members to you!');
          })
          .post(function(req, res, next){
              res.end('Will add: ' + req.body.firstName + ' ' + req.body.lastName
              		+ '\nwith phone: ' + req.body.phone
              		+ '\nand email: ' + req.body.email
                  + '\nto committeeId: ' + req.body.committeeId
              );
          });
/*
  temporarily disabling DELETE route          
*/
          //.delete(function(req, res, next){
          //    res.end('Deleting all committees');
          //});


// route config: /committees/:commId
committeesRouter.route('/:commId')
          .all(function(req,res,next) {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              next();
          })
          .get(function(req,res,next){
              res.end('Will send details for committee: ' + req.params.commId +' to you!');
          })
          .put(function(req, res, next){
              res.write('Updating the committee: ' + req.params.commId + '\n');
              res.end('Will update details for : ' + req.body.firstName + ' ' + req.body.lastName
                  + '\nwith phone: ' + req.body.phone
                  + '\nand email: ' + req.body.email
                  + '\nto committeeId: ' + req.body.committeeId
              );
          });

/*
  temporarily disabling DELETE route          
*/
          //.delete(function(req, res, next){
          //    res.end('Deleting committee: ' + req.params.commId);
          //});

 

module.exports = committeesRouter;
