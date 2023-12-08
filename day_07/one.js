const { sample } = require('lodash');
const { parseCardInfo, isGreater } = require('./utility');
const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

module.exports = function(input) {
    const hands = [];
    const bids = [];
    const games = sampleInput.split('\n');
    games.forEach(game => {
        let [hand, bid] = game.split(' ');
        bid = parseInt(bid);
        hands.push(hand);
        bids.push(bid);
    })
    let handStrength = hands.map(h => parseCardInfo(h));
    handStrength = handStrength.map((hand, i) => ({...hand, bid: bids[i]}));
    handStrength.sort(isGreater).reverse();
    const handOrder = handStrength.map((obj, i)=> ({ ...obj, strength: handStrength.length - i}))
    console.log(handOrder);
    handOrder.forEach(({strength, bid}) => console.log(`${bid} * ${strength} = ${bid * strength}`))
    return handOrder.reduce((acc, {strength, bid}) => acc+= strength * bid ,0);
}