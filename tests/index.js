const assert = require('assert');

const { getRandomFirstName } = require('../services/randomFirstName');

// Test 1 : la fonction retourne une string
try {
    assert.strictEqual(typeof getRandomFirstName(), 'string', 'La fonction pickRandomFirstname devrait retourner une string');
    console.log('Test 1 ok');
} catch (error) {
    console.error(error.message);
}

try {
    // Test 2 : la string est un prénom
    assert.match(getRandomFirstName(), /^[a-zA-Z -]+$/, "La fonction pickRandomFirstname devrait retourner un prénom composé de lettres, d'espaces et de tirets uniquement");
    console.log('Test 2 ok');
} catch (error) {
    console.error(error.message);
}