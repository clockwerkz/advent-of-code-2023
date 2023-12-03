const bagContents = {
    red: 12,
    green: 13, 
    blue: 14
}

const colors = ['blue', 'red', 'green'];

// function gameParser(game) {
//     [idText, gameScores] = game.split(':');
//     const id = parseInt(idText.match(/\d+/)[0]);
//     const gameTally = {};
//     colors.forEach(color => {
//         const regexp = new RegExp(`[0-9]+ ${color}`, "gi")
//         const res = gameScores.match(regexp);
//         const colorTally = res.reduce((acc, score) => {
//             const colorRes = score.match(/\d+/);
//             return colorRes ? acc += parseInt(colorRes) : acc;
//         }, 0);
//         gameTally[color] = colorTally;
//     })
//     const isValid = colors.every((color) => gameTally[color] <= bagContents[color]);
//     if (isValid) {
//         console.log(gameTally);
//     }
//     return { id, isValid };
// };

function gameScoresAreValid (score) {
    for (let color of colors) {
        const regexp = new RegExp(`[0-9]+ ${color}`, "i")
        const res = score.match(regexp);
        if (res) {
            const colorScore = res[0].match(/\d+/);
            if (colorScore > bagContents[color]) {
                return false;
            }
        }
    }
    return true;
}

function gameParser(game) {
    const colors = ['blue', 'red', 'green'];
    [idText, totalGames] = game.split(':');
    const id = parseInt(idText.match(/\d+/)[0]);
    const gameScores = totalGames.split(';');
    const isValid = gameScores.every(score => gameScoresAreValid(score));
    return { id, isValid };
};

module.exports  = {
    bagContents,
    gameParser
}
