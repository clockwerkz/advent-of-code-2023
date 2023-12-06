function separateData(input) {
    const inputArray = input.split('\n\n');
    const seeds = inputArray[0];
    const mappers = inputArray.slice(1);
    return { seeds, mappers };
}


function mapper (text) {
    const map = {};
    const textInput = text.split('\n');
    const mapName = textInput[0];
    const values = textInput.slice(1);
    values.forEach(value => {
        const [dest, src, range] = value.split(' ').map(el => parseInt(el));
        for (let i=0; i<range; i++) {
            map[src+i] = dest + i;
        }
    });
    return {mapName, map};
}

function findLowestLocationValue(input) {
    const srcToDestKeys = [
        'seed-to-soil map:',
        'soil-to-fertilizer map:',
        'fertilizer-to-water map:',
        'water-to-light map:',
        'light-to-temperature map:',
        'temperature-to-humidity map:',
        'humidity-to-location map:'
    ];
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
    const { seeds: seedsData, mappers } = separateData(input);
    mappers.forEach(mapperText => {
        const { mapName, map } = mapper(mapperText);
        sourceToDestinationMaps[mapName] = map;
    });
    const seeds = seedsData.match(/\d+/g);
    seeds.forEach(seed => {
        let currentVal = seed;
        for (let key of srcToDestKeys) {
            currentMappingValue = sourceToDestinationMaps[key][currentVal]
            if (currentMappingValue) {
                currentVal = currentMappingValue;
            }
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
    findLowestLocationValue
}
