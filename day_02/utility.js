const bagContents = {
    red: 12,
    green: 13, 
    blue: 14
}

const colors = ['blue', 'red', 'green'];

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

function fewestCubes(gameInput) {
    const games = gameInput.split(';');
    const fewest = { blue: 0, red: 0, green: 0 };
    for (let game of games) {
        colors.forEach(color => {
            const regexp = new RegExp(`[0-9]+ ${color}`, "i")
            const res = game.match(regexp);
            if (res) {
                const colorCount = parseInt(res[0].match(/\d+/));
                if (fewest[color] < colorCount) fewest[color] = colorCount;
            }
        })  
    }
    return fewest;
}

function powerOfGame(game) {
    const currentSet = fewestCubes(game);
    return Object.keys(currentSet).reduce((acc, color) => acc*= currentSet[color], 1);
}

module.exports  = {
    bagContents,
    gameParser,
    fewestCubes,
    powerOfGame
}

