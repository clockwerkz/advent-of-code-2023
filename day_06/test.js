const assert = require('assert');

const { rangeOfRaceTimes,parseInputToRaces, parseInputOneRace } = require('./utility');
const { sample } = require('lodash');

describe("Day #6 - Calculating Minimum Race times",()=>{
    it(`possible number of races for a time of 7 and distance 9 should be 4`,()=>{
        assert.strictEqual(rangeOfRaceTimes(7, 9), 4);
    });
    it(`possible number of races for a time of 15 and a distance 40 should be 8`,()=>{
        assert.strictEqual(rangeOfRaceTimes(15, 40), 8);
    });
    it(`possible number of races for a time of 30 and a distance of 200 should be 9`,()=>{
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

describe('Day #6 - parsing input into one big race and calculating how many races', ()=>{
    const sampleRaces = `Time:      7  15   30
Distance:  9  40  200`;
    const [time, distance] = parseInputOneRace(sampleRaces);
    it('time returned from parsing into one race with sample data should equal 71530', ()=>{
        assert.strictEqual(time, 71530);
    })
    it('distance returned from parsing into one race with sample data should equal 940200', ()=>{
        assert.strictEqual(distance, 940200);
    })
    it('possible number of races from a time of 71530 and a distance of 940200 should be 71503', ()=>{
        assert.strictEqual(rangeOfRaceTimes(time, distance), 71503);
    })

})