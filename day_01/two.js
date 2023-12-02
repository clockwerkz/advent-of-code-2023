const { processLine } = require('./utility');

module.exports = function(input) {
    let sum = 0;
    const calibrationValues = input.split('\n');
    for (let calibrationValue of calibrationValues) {
        const value = processLine(calibrationValue);
        sum += value;
    }
    return sum;
}