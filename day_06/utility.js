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



module.exports = {
    rangeOfRaceTimes,
    parseInputToRaces
}