'use strict';

var chai 	= require('chai'),
	expect 	= chai.expect,
	Q		= require('q');
	chai.use( require("sinon-chai") );
	chai.use( require("chai-as-promised") );


describe( 'GET /proposals', function() {
	context('1 or more proposals were submitted', function() {
		beforeEach(function() {
			this.proposalsModel = [
				{
					_id: 1,
					firstName: "Jane",
					lastName: "Doe",
					email: "a@b.com",
					phone: "123456789",
					title: "Awesome Program",
					categoryID: 1,
					description: "The most wholesome program to ever hit the airwaves"
				},
				{
					_id: 2,
					firstName: "John",
					lastName: "Doe",
					email: "c@d.com",
					phone: "123456789",
					title: "Serious Program",
					categoryID: 4,
					description: "The most important program to ever hit the airwaves"
				}
			];
			this.proposalsSystem.display
				.returns(Q.fulfill(this.proposalsModel));
		});

		it('will respond with a 200 code');

		describe('will respond with an array of JSON objects', function() {
			// TODO
		})
	});


	context('No proposals were submitted', function() {
		beforeEach(function() {
			this.proposalsSystem.display
				.returns(Q.fulfill(null));
		});

		it('will respond with a 404 code');
	});


	context('The forms web service is down', function() {
		beforeEach(function() {
			this.proposalsSystem.display
				.returns(Q.reject(new Error('Expected error')));
		});

		it('will respond with a 500 code');
	});
});









