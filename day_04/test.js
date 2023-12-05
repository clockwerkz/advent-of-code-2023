const assert = require('assert');
const _ = require("lodash");
const { processEntry, processEntries, processCardValues, countingDuplicateCards } = require('./utility');

const one = require("./one");
const two = require("./two");

describe("Day #4 - Part 1",()=>{
    const card1 = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53';
    const card2 = 'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19';
    const card4 = 'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83';
    const answer = 8;
    const sampleInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`
    it(`Card 1 from the sample data should return 8`,()=>{
        assert.strictEqual(processEntry(card1), 8);
    });
    it(`Card 2 from the sample data should return 2`,()=>{
        assert.strictEqual(processEntry(card2), 2);
    });
    it(`Card 4 from the sample data should return 1`,()=>{
        assert.strictEqual(processEntry(card4), 1);
    });
    it('should return 13', ()=> {
        assert.strictEqual(processEntries(sampleInput), 13);
    })
});

describe("Day #4 - Part 2",()=>{
    const card1 = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53';
    const card2 = 'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19';
    const card12 = 'Card 12: 13 32 20 16 61 | 61 30 68 82 17 32 24 19';
    const card4 = 'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83';
    const answer = 8;
    const sampleInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`
    it(`processCardValues for Card 1 should return an object with id: 1, extraCards: 4`,()=>{
        const res = processCardValues(card1);
        const correct = { id: '1', extraCards: 4}
        assert.strictEqual(_.isEqual(res, correct), true);
    });
    it(`processCardValues for Card 12 should return an object with id: 12, extraCards: 2`,()=>{
        const res = processCardValues(card12);
        const correct = { id: '12', extraCards: 2}
        assert.strictEqual(_.isEqual(res, correct), true);
    });
    it(`Sample Input should return 40 cards`,()=>{
        assert.strictEqual(countingDuplicateCards(sampleInput), 30);
    });
});