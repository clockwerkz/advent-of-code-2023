const { adjacentToSymbol } = require('./utility');

module.exports = function(input) {
    const symbols = {};
    input.split('').forEach(el => !symbols[el] ? symbols[el]=true : null);
    return adjacentToSymbol(input);
}