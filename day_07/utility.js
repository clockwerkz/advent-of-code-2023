const cardsArray = 'AKQJT98765432'.split('');
const order = {};
Object.values(cardsArray).forEach((card, i) => {
    order[card] = i;
})

function isGreater(c1, c2) {
    console.log('isGreater', c1, c2);
    const { card: card1, order: o1, hand: h1 } = c1;
    const { card: card2, order: o2, hand: h2 } = c2;
    if (o1 !== o2) {
        return o1 > o2;
    }
    console.log('h1', h1, 'h2', h2);
    if (h1 !== h2) {
        return h1 > h2;
    }
    for (let i=0; i < card1.length; i++) {
        if (card1[i] !== card2[i]) {
            console.log('order', order[card1[i]], '>', order[card2[i]]);
            return order[card1[i]] > order[card2[i]];
        }
    }
    return true;
}

function parseCardInfo(cardsStr) {
    const cards = cardsStr.split('');
    const cardCount = {};
    for (let card of cards) {
        const regexp = new RegExp(card, 'gi');
        const res = cardsStr.match(regexp);
        if (!cardCount[card]) {
            cardCount[card] = res.length;
        }
    }
    const typesOfCards = Object.keys(cardCount);
    const hand = typesOfCards.length;
    let handStrength;
    if (hand === 1) {
        handStrength = 5;
    } else if (hand === 4) {
        handStrength = 0;
    } else if (hand === 2){
        const cardToCheck = cardCount[typesOfCards[0]];
        handStrength = cardToCheck === 1 || cardToCheck === 4 ? 4 : 3;
    }
    else if (hand === 3){
        const cardToCheck = typesOfCards.some(card => cardCount[card] === 3)
        handStrength = cardToCheck ? 2 : 1;
    }
    console.log(cardsStr, handStrength);
    return { card: cardsStr, hand : handStrength };
}

/* 
hand                length of keys
five of a kind          1
four of a kind          2 - 4 1
fullhouse               2 - 3 2
three of a kind         3 - 3 1 1
two pair                3 - 2 2 1
one pair                4 - 2 1 1 1
*/



module.exports = {
    parseCardInfo,
    isGreater
};