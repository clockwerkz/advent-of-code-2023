const assert = require('assert');
const _ = require("lodash");
const one = require("./one");
const two = require("./two");
const { gameParser, fewestCubes, powerOfGame } = require("./utility");

describe("Day #2 - Part 1: Given the results of a game, validate if the outcome was possible",()=>{
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

describe("Day #2 - Part 2: Fewest cubes possible in order for game session to be valid",()=>{
    const testLine1 = " 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const correct1 = { red: 4, green: 2, blue: 6};
    const res1 = fewestCubes(testLine1);
    it(`Response should be ${JSON.stringify(correct1)}`,()=>{
        assert.strictEqual(_.isEqual(res1, correct1), true);
    });
    const power1 = 48;
    it(`Power of ${JSON.stringify(correct1)} should be ${power1}`, ()=>{
        assert.strictEqual(powerOfGame(testLine1), power1);
    });
    const testLine2 = " 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
    const correct2 = { red: 1, green: 3, blue: 4};
    const res2 = fewestCubes(testLine2);
    it(`Response should be ${JSON.stringify(correct2)}`,()=>{
        assert.strictEqual(_.isEqual(res2, correct2), true);
    });
    const power2 = 12;
    it(`Power of ${JSON.stringify(correct2)} should be ${power2}`, ()=>{
        assert.strictEqual(powerOfGame(testLine2), power2);
    });
    const testLine3 = " 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    const correct3 = { red: 20, green: 13, blue: 6};
    const res3 = fewestCubes(testLine3);
    it(`Response should be ${JSON.stringify(correct3)}`,()=>{
        assert.strictEqual(_.isEqual(res3, correct3), true);
    });
    const power3 = 1560;
    it(`Power of ${JSON.stringify(correct3)} should be ${power3}`, ()=>{
        assert.strictEqual(powerOfGame(testLine3), power3);
    });
    const testLine4 = " 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red";
    const correct4 = { red: 14, green: 3, blue: 15};
    const res4 = fewestCubes(testLine4);
    it(`Response should be ${JSON.stringify(correct4)}`,()=>{
        assert.strictEqual(_.isEqual(res4, correct4), true);
    });
    const power4 = 630;
    it(`Power of ${JSON.stringify(correct4)} should be ${power4}`, ()=>{
        assert.strictEqual(powerOfGame(testLine4), power4);
    });
    const testLine5 = " 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
    const correct5 = { red: 6, green: 3, blue: 2};
    const res5 = fewestCubes(testLine5);
    it(`Response should be ${JSON.stringify(correct5)}`,()=>{
        assert.strictEqual(_.isEqual(res5, correct5), true);
    });
    const power5 = 36;
    it(`Power of ${JSON.stringify(correct5)} should be ${power5}`, ()=>{
        assert.strictEqual(powerOfGame(testLine5), power5);
    });
});