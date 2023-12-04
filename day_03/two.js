const { adjacentToExactlyTwoSymbols } = require('./utility');

module.exports = function(input) {
    const symbols = {};
    input.split('').forEach(el => !symbols[el] ? symbols[el]=true : null);
    return adjacentToExactlyTwoSymbols(input);
}