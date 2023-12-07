const assert = require('assert');

const { rangeOfRaceTimes,parseInputToRaces } = require('./utility');
const { sample } = require('lodash');

describe("Day #6 - Calculating Minimum Race times",()=>{
    it(`range of race times multiplied should return 6`,()=>{
        assert.strictEqual(rangeOfRaceTimes(7, 9), 4);
    });
    it(`range of race times multiplied should return 6`,()=>{
        assert.strictEqual(rangeOfRaceTimes(15, 40), 8);
    });
    it(`range of race times multiplied should return 6`,()=>{
        assert.strictEqual(rangeOfRaceTimes(30, 200), 9);
    });
});

describe('Day #6 - Parsing input into race data', ()=>{
    const sampleRaces = `Time:      7  15   30
Distance:  9  40  200`;
    const races = parseInputToRaces(sampleRaces);
    const [ time, distance ] = races[0];
    it('returns test data in an array of length 3', ()=>{
        assert.strictEqual(races.length, 3);
    })
    it('first element in array has a time of 7', ()=>{
        assert.strictEqual(time, 7);
    })
    it('first element in array has a distance of 9', ()=>{
        assert.strictEqual(distance, 9);
    })
})