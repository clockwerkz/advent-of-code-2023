const { gameParser } = require("./utility");

module.exports = function(input) {
    const games = input.split('\n');
    let gameIdSums = 0;
    for (let game of games) {
        const res = gameParser(game);
        if (res.isValid) gameIdSums += res.id;
    }
    return gameIdSums;
}