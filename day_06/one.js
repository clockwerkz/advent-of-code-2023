const { rangeOfRaceTimes,parseInputToRaces } = require('./utility');

module.exports = function(input) {
    let product = 1;
    const races = parseInputToRaces(input);
    for (let race of races) {
        const [time, distance] = race;
        product *= rangeOfRaceTimes(time, distance);
    }
    return product;
}