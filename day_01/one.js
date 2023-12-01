module.exports = function(input) {
    let sum = 0;
    const calibrationValues = input.split('\n');
    for (calibrationValue of calibrationValues) {
        const digitsArray = calibrationValue.match(/\d/g);
        if (!digitsArray) continue;
        const [ firstDigit ] = digitsArray;
        if (digitsArray.length < 2) {
            sum += parseInt(`${firstDigit}${firstDigit}`);
        } else {
            const lastDigit = digitsArray[digitsArray.length - 1];
            sum += parseInt(`${firstDigit}${lastDigit}`);
        }
    }
    return sum;
}