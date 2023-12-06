const assert = require('assert');
const _ = require("lodash");
const one = require("./one");
const two = require("./two");
const { mapper, separateData, findLowestLocationValue } = require('./utility');

describe("Day #5 - Mapping Function",()=>{
    const sampleInput = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;
    const seedToSoil = `seed-to-soil map:
50 98 2
52 50 48`;
    const answer = 0;
    it(`should return an object with a property mapName`,()=>{
        assert.strictEqual(mapper(seedToSoil).hasOwnProperty("mapName"), true);
    });
    it('should split up the input text and return two objects, seeds and mappers', ()=>{
        assert.strictEqual(separateData(sampleInput).hasOwnProperty('seeds'), true);
    });
    it('using test input, should return the lowest location value of 35', ()=>{
        assert.strictEqual(findLowestLocationValue(sampleInput), 35);
    })
});

describe("Day # - Part 2",()=>{
    const answer = 0;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(two(), answer);
    });
});