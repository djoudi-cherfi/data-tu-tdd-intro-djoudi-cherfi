const { expect } = require('chai');

const assert = require('assert');

const { getRandomFirstName, data } = require('../services/randomFirstName');

describe('randomFirstName service', function() {
    describe('getRandomFirstName', function() {
        it('should return a string', function() {
            expect(getRandomFirstName()).to.be.a('string');
        });

        it('should return a first name made up of letters, spaces and dashes only', function() {
            expect(getRandomFirstName()).to.match(/^[a-zA-Z -]+$/);
        });

        it('should return one of the proposition in data', function() {
            expect(getRandomFirstName()).to.be.oneOf(data);
        });
    });
});