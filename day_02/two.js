const { powerOfGame } = require("./utility");

module.exports = function(input) {
    const games = input.split('\n').map((game) => game.split(":")[1]);
    let powerOfSum = 0;
    for (let game of games) {
        powerOfSum += powerOfGame(game);

    }
    return powerOfSum;
}