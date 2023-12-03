const { adjacentToSymbol } = require('./utility');

module.exports = function(input) {
    const symbols = {};
    input.split('').forEach(el => !symbols[el] ? symbols[el]=true : null);
    console.log(Object.keys(symbols).join(''));
    return adjacentToSymbol(input);
}