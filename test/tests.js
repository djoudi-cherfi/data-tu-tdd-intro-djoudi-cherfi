const assert = require('assert');

const { getRandomFirstName, data } = require('../services/randomFirstName');

describe('randomFirstName service', function() {
    describe('getRandomFirstName', function() {
        it('should return a string', function() {
            assert.strictEqual(typeof getRandomFirstName(), 'string');
        });

        it('should return a first name made up of letters, spaces and dashes only', function() {
            assert.match(getRandomFirstName(), /^[a-zA-Z -]+$/);
        });

        it('should return one of the proposition in data', function() {
            assert.ok(data.includes(getRandomFirstName()));
        });
    });
});