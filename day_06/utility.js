function rangeOfRaceTimes(time, distance) {
    const ranges = [];
    for (let i=1; i < time; i++) {
        if ((time - i) * i  > distance) {
            ranges.push(i);
        } 
    }
    return ranges.length;
}

function parseInputToRaces(input) {
    const races = [];
    const [timeStr, distanceStr] = input.split('\n');
    const times = timeStr.match(/\d+/g).map(el => parseInt(el));
    const distances = distanceStr.match(/\d+/g).map(el => parseInt(el));
    for (let i=0; i < times.length; i++) {
        races.push([times[i], distances[i]]);
    }
    return races;
}

function parseInputOneRace(input) {
    const [timeStr, distanceStr] = input.split('\n');
    const time = parseInt(timeStr.match(/\d+/g).join(''));
    const distance = parseInt(distanceStr.match(/\d+/g).join(''));
    return [time, distance];
}



module.exports = {
    rangeOfRaceTimes,
    parseInputToRaces,
    parseInputOneRace
}