const assert = require('assert');
const { navigateNetwork } = require('./utility');
describe("Day #8 - navigateNetwork function",()=>{
    const testInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;
const testInput2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;
    it(`Given the sample input ${testInput2}, it should take 6 moves to find ZZZ`,()=>{
        assert.strictEqual(navigateNetwork(testInput2), 6);
    });
});
