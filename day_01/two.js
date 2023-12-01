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
    for (let calibrationValue of calibrationValues) {
        let firstDigit = '', lastDigit = '';
        let min = calibrationValue.length;
        let max = -1;
        for (key of Object.keys(numberConversion)) {
            const firstIndex = calibrationValue.indexOf(key);
            const lastIndex = calibrationValue.lastIndexOf(key);
            if (firstIndex !== -1 && firstIndex < min) {
                firstDigit = key;
                min = firstIndex;
            } 
            if (lastIndex > max){
                lastDigit = key;
                max = lastIndex;
            }
        }
        for (let i=1; i<10; i++) {
            const firstIndex = calibrationValue.indexOf(i);
            const lastIndex = calibrationValue.lastIndexOf(i);
            if (firstIndex !== -1 && firstIndex < min) {
                firstDigit = i;
                min = firstIndex;
            } 
            if (lastIndex > max){
                lastDigit = i;
                max = lastIndex;
            }
        }
        const value = parseInt(`${convertNumber(firstDigit)}${convertNumber(lastDigit)}`);
        sum += value;
    }
    return sum;
}