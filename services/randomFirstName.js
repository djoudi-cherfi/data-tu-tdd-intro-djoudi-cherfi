const data = ['Barack', 'Serena', 'Jean', 'Paul', 'Jean-Paul'];

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    getRandomFirstName: () => data[random(0, data.length - 1)],
    data
};
