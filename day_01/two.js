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

module.exports = function(input) {
    let sum = 0;
    const calibrationValues = input.split('\n');
    const regexStr = Object.keys(numberConversion).join('|'); 
    const regex = new RegExp(`[0-9]|${regexStr}`, "g");
    console.log(regex);
    for (let i = 0; i < calibrationValues.length; i++) {
        const calibrationValue = calibrationValues[i];
        const digitsArray = calibrationValue.match(regex);
        if (!digitsArray) continue;
        let number;
        const [ firstDigit ] = digitsArray;
        if (digitsArray.length < 2) {
        
            number = parseInt(`${convertNumber(firstDigit)}${convertNumber(firstDigit)}`);
        } else {
            const lastDigit = digitsArray[digitsArray.length - 1];
            number = parseInt(`${convertNumber(firstDigit)}${convertNumber(lastDigit)}`);
        }
        console.log(`${calibrationValue}: ${number} + ${sum} = ${number + sum}`);
        sum += number;
        // console.log(calibrationValue, digitsArray, number);
    }
    return sum;
}