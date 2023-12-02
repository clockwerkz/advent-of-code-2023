const numberConversion = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}
  
function convertNumber(el) {
    return isNaN(el) ? numberConversion[el] : el;
}
  
  
function processLine(str) {
    const regexStr = Object.keys(numberConversion).join('|');
    const regex = new RegExp(regexStr, "g");
    let fPtr = 0, lPtr = str.length - 1;
    let outOfBounds = false;
    let firstDigit, lastDigit;
    let fSubStr = "";
    let lSubStr = "";
    while ((!firstDigit || !lastDigit) && !outOfBounds) {
        if (!firstDigit) {
        if (str[fPtr].match(/[1-9]/)) {
            firstDigit = parseInt(str[fPtr]);
        } else {
            fSubStr += str[fPtr];
            const word = fSubStr.match(regex)
            if (word) {
            firstDigit = numberConversion[word];
            }
        }
        }
        if (!lastDigit) {
        if (str[lPtr].match(/[1-9]/)) {
            lastDigit = parseInt(str[lPtr]);
        } else {
            lSubStr = str[lPtr] + lSubStr;
            const word = lSubStr.match(regex)
            if (word) {
            lastDigit = numberConversion[word];
            }
        }
        }
        fPtr++;
        lPtr--;
        outOfBounds = fPtr >= str.length && lPtr < 0;
    }
    return firstDigit * 10 + lastDigit;
};

module.exports = {
    numberConversion,
    convertNumber,
    processLine
}