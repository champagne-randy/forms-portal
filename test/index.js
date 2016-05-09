/*jslint node: true */
'use strict';

var sinon 		= require('sinon'),
	newRouteFor = require('../index'),
	newClient 	= require('./support/client'),
	express 	= require('express'),
	app 		= express(),
	server,
	currentProposalsSystem,
	port 		= process.env.PORT || 3000;


before(function () {
	this.GET = newClient('http://localhost:' + port).GET;
});


before(function(callback) {
	this.proposalsBaseURI = '/proposals';
	app
		.use(this.proposalsBaseURI, newRouteFor.proposals({
			display: function () {
				return currentProposalsSystem.display.apply(currentProposalsSystem, arguments);
			}
		}))
		.listen(port, function(callback) {
			server = this;
			callback.apply(this, arguments);
		});
});


after(function(callback) {
	if (!server)
		return setImmediate(callback);
	server.close(callback);
});


beforeEach(function () {
	currentProposalsSystem = {
		display: sinon.stub()
	};
	this.proposalsSystem = currentProposalsSystem;
});





