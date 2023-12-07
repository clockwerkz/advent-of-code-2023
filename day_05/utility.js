const srcToDestKeys = [
    'seed-to-soil map:',
    'soil-to-fertilizer map:',
    'fertilizer-to-water map:',
    'water-to-light map:',
    'light-to-temperature map:',
    'temperature-to-humidity map:',
    'humidity-to-location map:'
];

function separateData(input) {
    const inputArray = input.split('\n\n');
    const seeds = inputArray[0];
    const mappers = inputArray.slice(1);
    return { seeds: seeds.match(/\d+/g), mappers };
}


function mapper (text) {
    const srcMap = [], destMap = [];
    const textInput = text.split('\n');
    const mapName = textInput[0];
    const values = textInput.slice(1);
    values.forEach(value => {
        const [dest, src, range] = value.split(' ').map(el => parseInt(el));
        srcMap.push([src, src+range-1])
        destMap.push([dest, dest+range-1])
    });
    return {mapName, srcMap, destMap};
}

function findSeedRanges(seeds) {
    const range = [];
    for (let i=0; i<seeds.length; i+=2) {
        const start = parseInt(seeds[i]);
        const end = parseInt(seeds[i+1]) + start;
        range.push([start, end]);
    }
    return range;
}

function findLowestLocationValueInRange(input) {
    const sourceToDestinationMaps = {
        'seed-to-soil map:': {},
        'soil-to-fertilizer map:': {},
        'fertilizer-to-water map:': {},
        'water-to-light map:': {},
        'light-to-temperature map:': {},
        'temperature-to-humidity map:': {},
        'humidity-to-location map:': {}
    }
    let lowestValue = Infinity;
    const { seeds, mappers } = separateData(input);
    mappers.forEach(mapperText => {
        const { mapName, srcMap, destMap } = mapper(mapperText);
        sourceToDestinationMaps[mapName] = {srcMap, destMap};
    });
    const ranges = findSeedRanges(seeds);
    ranges.forEach(([start, length]) => {
        for (let seed=start; seed < start + length; seed++){
            let currentVal = seed;
            for (let key of srcToDestKeys) {
                const { srcMap, destMap } = sourceToDestinationMaps[key];
                for (let i=0; i < srcMap.length; i++) {
                    const [ min, max ] = srcMap[i];
                    if (currentVal >= min && currentVal <= max ) {
                        const offset = currentVal - min;
                        console.log('key', key, 'offset', offset);
                        currentVal = destMap[i][0] + offset;
                        console.log(currentVal, currentVal === 0 ? '********' : '');
                        break;
                    }
                };
            }
            if (currentVal < lowestValue) {
                lowestValue = currentVal;
            }
        }
    });
    return lowestValue;
}

function findLowestLocationValue(input) {
    const sourceToDestinationMaps = {
        'seed-to-soil map:': {},
        'soil-to-fertilizer map:': {},
        'fertilizer-to-water map:': {},
        'water-to-light map:': {},
        'light-to-temperature map:': {},
        'temperature-to-humidity map:': {},
        'humidity-to-location map:': {}
    }
    let lowestValue = Infinity;
    const { seeds, mappers } = separateData(input);
    mappers.forEach(mapperText => {
        const { mapName, srcMap, destMap } = mapper(mapperText);
        sourceToDestinationMaps[mapName] = {srcMap, destMap};
    });
    seeds.forEach(seed => {
        let currentVal = seed;
        for (let key of srcToDestKeys) {
            const { srcMap, destMap } = sourceToDestinationMaps[key];
            for (let i=0; i < srcMap.length; i++) {
                const [ min, max ] = srcMap[i];
                if (currentVal >= min && currentVal <= max ) {
                    const offset = currentVal - min;
                    currentVal = destMap[i][0] + offset;
                    break;
                }
            };
        }
        if (currentVal < lowestValue) {
            lowestValue = currentVal;
        }
    });
    return lowestValue;
}


module.exports = {
    mapper,
    separateData,
    findLowestLocationValue,
    findSeedRanges,
    findLowestLocationValueInRange
}
