function adjacentToSymbol (str) {
    let sum = 0;
    const lines = str.split('\n');
    let regex = new RegExp("[*#+$%@&=/-]", "i");
    lines.forEach((line, i) => {
        for (let j=0; j < line.length; j++) {
            if (line[j].match(regex)) {
                if (i-1 >= 0) {
                    if (lines[i-1][j].match(/[0-9]/)) {
                        sum += findRestOfNumber(lines[i-1], j);
                    } else {
                        if (j-1>=0 && lines[i-1][j-1].match(/[0-9]/)) {
                        sum += findRestOfNumber(lines[i-1], j-1);
                        }
                        if (j+1<lines[i-1].length && lines[i-1][j+1].match(/[0-9]/)){
                        sum += findRestOfNumber(lines[i-1], j+1);
                        }
                    }
                }
                if (j-1>=0 && line[j-1].match(/[0-9]/)) {
                    sum += findRestOfNumber(line, j-1);
                }
                if (j+1 < line.length && line[j+1].match(/[0-9]/)) {
                    sum += findRestOfNumber(line, j+1);
                }
                if (i+1 < lines.length) {
                    if (lines[i+1][j].match(/[0-9]/)) {
                        sum += findRestOfNumber(lines[i+1], j);
                    } else {
                        if (j-1>=0 && lines[i+1][j-1].match(/[0-9]/)) {
                            sum += findRestOfNumber(lines[i+1], j-1);
                        }
                        if (j+1<lines[i+1].length && lines[i+1][j+1].match(/[0-9]/)){
                            sum += findRestOfNumber(lines[i+1], j+1);
                        }
                    }
                }
            }
        };
    });
    return sum;
};

function adjacentToExactlyTwoSymbols (str) {
    let sum = 0;
    const lines = str.split('\n');
    let regex = new RegExp("[*#+$%@&=/-]", "i");
    lines.forEach((line, i) => {
        for (let j=0; j < line.length; j++) {
            let gearValues = [];
            if (line[j].match(regex)) {
                if (i-1 >= 0) {
                    if (lines[i-1][j].match(/[0-9]/)) {
                        gearValues.push(findRestOfNumber(lines[i-1], j));
                    } else {
                        if (j-1>=0 && lines[i-1][j-1].match(/[0-9]/)) {
                        gearValues.push(findRestOfNumber(lines[i-1], j-1));
                        }
                        if (j+1<lines[i-1].length && lines[i-1][j+1].match(/[0-9]/)){
                        gearValues.push(findRestOfNumber(lines[i-1], j+1));
                        }
                    }
                }
                if (j-1>=0 && line[j-1].match(/[0-9]/)) {
                    gearValues.push(findRestOfNumber(line, j-1));
                }
                if (j+1 < line.length && line[j+1].match(/[0-9]/)) {
                    gearValues.push(findRestOfNumber(line, j+1));
                }
                if (i+1 < lines.length) {
                    if (lines[i+1][j].match(/[0-9]/)) {
                        gearValues.push(findRestOfNumber(lines[i+1], j));
                    } else {
                        if (j-1>=0 && lines[i+1][j-1].match(/[0-9]/)) {
                            gearValues.push(findRestOfNumber(lines[i+1], j-1));
                        }
                        if (j+1<lines[i+1].length && lines[i+1][j+1].match(/[0-9]/)){
                            gearValues.push(findRestOfNumber(lines[i+1], j+1));
                        }
                    }
                }
            }
            if (gearValues.length === 2) {
                sum += gearValues[0] * gearValues[1];
            }
        };
    });
    return sum;
};

function findRestOfNumber(line, idx) {
    let lptr = idx - 1;
    let rptr = idx + 1;
    let numberFragment = line[idx];
    while ((line[lptr] && line[lptr].match(/[0-9]/)) || (line[rptr] && line[rptr].match(/[0-9]/))) {
        if (line[lptr] && line[lptr].match(/[0-9]/)) {
            numberFragment = line[lptr] + numberFragment;
            lptr--;
        }
        if (line[rptr] && line[rptr].match(/[0-9]/)) {
            numberFragment += line[rptr];
            rptr++;
        }
    }
    return parseInt(numberFragment);
}

module.exports = {
    adjacentToSymbol,
    adjacentToExactlyTwoSymbols,
    findRestOfNumber
}