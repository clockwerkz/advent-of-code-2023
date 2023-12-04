const assert = require('assert');
const { adjacentToSymbol, adjacentToExactlyTwoSymbols, findRestOfNumber } = require('./utility');

describe("Day 3 - findRestOfNumber helper function", ()=>{
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

describe("Day #3 - Part 1: Find all values adjacent to symbol and add them together",()=>{
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
    it(`${input} should return ${answer}`,()=>{
        assert.strictEqual(adjacentToSymbol(input), 4361);
    });
    const input2 = '..368*901..';
    it(`${input2} should return 1269`,()=>{
        assert.strictEqual(adjacentToSymbol(input2), 1269);
    });
    const input3 = `
..1.2...
..3%4...
...5....`;
    it(`${input3} should return 15`,()=>{
        assert.strictEqual(adjacentToSymbol(input3), 15);
    });
    const input4 = `
..1.2...
..3%4...
..5.6...`;
        it(`${input4} should return 21`,()=>{
            assert.strictEqual(adjacentToSymbol(input4), 21);
        });
});

describe("Day #3 - Part 2: Find cases where symbol is adjacent to exactly 2 gears, multiply those gears",()=>{
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
    const answer = 467835;
    it(`${input} should return ${answer}`,()=>{
        assert.strictEqual(adjacentToExactlyTwoSymbols(input), 467835);
    });
    const input2 = '..8*9..';
    it(`${input2} should return 72`,()=>{
        assert.strictEqual(adjacentToExactlyTwoSymbols(input2), 72);
    });
    const input3 = `
........
..3%....
...5....`;
    it(`${input3} should return 15`,()=>{
        assert.strictEqual(adjacentToExactlyTwoSymbols(input3), 15);
    });
    const input4 = `
........
..3%4...
........`;
        it(`${input4} should return 12`,()=>{
            assert.strictEqual(adjacentToExactlyTwoSymbols(input4), 12);
        });
        const input5 = `
........
..3%4...
...8....`;
        it(`${input5} should return 0`,()=>{
            assert.strictEqual(adjacentToExactlyTwoSymbols(input5), 0);
        });
        const input6 = `
........
...%4...
........`;
        it(`${input6} should return 0`,()=>{
            assert.strictEqual(adjacentToExactlyTwoSymbols(input6), 0);
        });
})
