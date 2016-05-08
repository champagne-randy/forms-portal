'use strict';

var sinon = require('sinon'),
	newRouteFor = require('../app'),
	express = require('express'),
	app = express(),
	server,
	currentProposalsSystem,
	port = process.env.PORT || 3000;


before(
	this.proposalsBaseURI = '/proposals';
	app
		.use(this.proposalsBaseURI, newRouteFor.proposals({
			display: function () {
				return currentProposalsSystem.display.apply
							(currentProposalsSystem, arguments);
			}
		}))
		.listen(port, function(callback) {
			server = this;
			callback.apply(this, arguments);
		});
);


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
}





