const assert = require('assert');
const { adjacentToSymbol, findRestOfNumber } = require('./utility');

describe("Day 3 - FindRestOfNumber", ()=>{
    const input = "35....633.";
    it(`provided index 7, the answer should be 633`, ()=>{
        assert.strictEqual(findRestOfNumber(input, 7), 633);
    })
    it(`provided index 8, the answer should be 633`, ()=>{
        assert.strictEqual(findRestOfNumber(input, 8), 633);
    })
    it(`provided index 0, the answer should be 35`, ()=>{
        assert.strictEqual(findRestOfNumber(input, 0), 35);
    })
    it(`provided index 1, the answer should be 35`, ()=>{
        assert.strictEqual(findRestOfNumber(input, 1), 35);
    })
    const input2 = '467..114..';
    it(`provided index 1, the answer should be 35`, ()=>{
        assert.strictEqual(findRestOfNumber(input2, 2), 467);
    })
});

describe("Day #3 - adjacentToSymbol",()=>{
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
    const answer = 4361;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(adjacentToSymbol(input), 4361);
    });
    const input2 = '..368*901..';
    it(`should return 1269`,()=>{
        assert.strictEqual(adjacentToSymbol(input2), 1269);
    });
});
