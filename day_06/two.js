const { range } = require('lodash');
const { rangeOfRaceTimes, parseInputOneRace } = require('./utility');

module.exports = function(input) {
    const [ time, distance ] = parseInputOneRace(input);
    return rangeOfRaceTimes(time, distance);
}