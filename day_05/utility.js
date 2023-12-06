function separateData(input) {
    const inputArray = input.split('\n\n');
    const seeds = inputArray[0];
    const mappers = inputArray.slice(1);
    return { seeds, mappers };
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
        const { mapName, srcMap, destMap } = mapper(mapperText);
        sourceToDestinationMaps[mapName] = {srcMap, destMap};
    });
    const seeds = seedsData.match(/\d+/g);
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
    findLowestLocationValue
}
