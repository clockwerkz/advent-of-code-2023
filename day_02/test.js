const assert = require('assert');
const _ = require("lodash");
const one = require("./one");
const two = require("./two");
const { gameParser } = require("./utility");

describe("Day #2 - Part 1: gameParser",()=>{
    const game1Id = 1;
    const testLine1 = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const res1 = gameParser(testLine1);
    it(`should return an object with a property id = ${game1Id}`,()=>{
        assert.strictEqual(res1.id, game1Id);
    });
    it(`${testLine1} is valid`,()=>{
        assert.strictEqual(res1.isValid, true);
    });
    const testLine2 = "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
    const res2 = gameParser(testLine2);
    it(`${testLine2} is valid`,()=>{
        assert.strictEqual(res2.isValid, true);
    });
    const testLine3 = "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    const res3 = gameParser(testLine3);
    it(`${testLine3} is valid`,()=>{
        assert.strictEqual(res3.isValid, false);
    });
    const testLine4 = "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red";
    const res4 = gameParser(testLine4);
    it(`${testLine4} is valid`,()=>{
        assert.strictEqual(res4.isValid, false);
    });
    const testLine5 = "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
    const res5 = gameParser(testLine5);
    it(`${testLine5} is valid`,()=>{
        assert.strictEqual(res2.isValid, true);
    });
});
