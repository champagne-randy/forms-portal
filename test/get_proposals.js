'use strict';

var chai 	= require('chai'),
	expect 	= chai.expect;
	chai.use( require("sinon-chai") );
	chai.use( require("chai-as-promised") );


describe( 'GET /proposals', function() {
	context('1 or more proposals were submitted', function() {
		it('will respond with a 200 code');

		describe('will respond with an array of JSON objects', function() {
			// TODO
		})
	});


	context('No proposals were submitted', function() {
		// TODO
	});

	context('The forms web service is down', function() {
		it('will respond with a 500 code');
	});
});