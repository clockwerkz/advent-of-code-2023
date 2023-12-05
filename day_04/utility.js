function processEntry (entry) {
    const [card, scores] = entry.split(" | ");
    const winningScores = {};
    scores.split(' ').forEach(score => {
        if (score) {
            winningScores[parseInt(score)] = true;
        }
    });
    const cardScores = card.split(': ')[1].split(' ').filter(el => el ? parseInt(el) : '');
    const winningScoreCount = cardScores.reduce((count, el) => winningScores[el] ? count + 1 : count, 0);
    return winningScoreCount > 0 ? 2 ** (winningScoreCount - 1) : 0;
}

function processEntries (entries) {
    return entries.split('\n').reduce((acc, entry) => acc += processEntry(entry), 0);
}

function processCardValues (entry) {
    const winningScores = {};
    const [ card, scores ] = entry.split(' | ');
    scores.split(' ').forEach(score => {
        if (score) {
            winningScores[parseInt(score)] = true;
        }
    });
    const [ cardLabel, cardScores ] = card.split(': ');
    const extraCards = cardScores.split(' ').reduce((count, el) => winningScores[el] ? count + 1 : count, 0);
    const [ id ] = cardLabel.match(/\d+/);
    return { id, extraCards };
}

function countingDuplicateCards (input) {
    const cardMap = {}
    const entries = input.split('\n');
    let currentCard = 1;
    for (let entry of entries) {
        const {id, extraCards} = processCardValues(entry);
        if (!cardMap[id]) {
            cardMap[id] = 1;
        } else {
            cardMap[id]++;
        }
        const endCondition = currentCard + extraCards <= entries.length + 1 ? currentCard + extraCards : entries.length + 1;
        for (let i=currentCard + 1; i<= endCondition; i++) {
            if (!cardMap[i]) {
                cardMap[i] = cardMap[id];
            } else {
                cardMap[i]+=cardMap[id];
            }
        }
        currentCard++;
    }
    const sum = Object.keys(cardMap).reduce((acc, el) => acc += cardMap[el], 0);
    return sum;
}

module.exports = { processEntry, processEntries, processCardValues, countingDuplicateCards };