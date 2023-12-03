const assert = require('assert');

const one = require("./one");
const two = require("./two");
const { processLine } = require("./utility")

describe("Day #1 - Part 2: processLine" ,()=>{
    let input = "1xxx7";
    let answer = 17;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "conexxx7";
    answer = 17;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "exxx7";
    answer = 17;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "cthreexxxxoneight";
    answer = 38;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "1xxxxoneight";
    answer = 18;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "xxxx4one5igf";
    answer = 45;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
    input = "xxxxeightvvvvvvv";
    answer = 88;
    it(`processLine ${input}: should should return ${answer}`,()=>{
        assert.strictEqual(processLine(input), answer);
    });
});
