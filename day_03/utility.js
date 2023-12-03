function adjacentToSymbol (str) {
    const lines = str.split('\n');
    let regex = new RegExp("[*#+$%@&=/]", "i");
    lines.forEach((line, i) => {
        for (let j=0; j < line.length; j++) {
            if (line[j].match(regex)) {
            }
        };
    });
};

function findRestOfNumber(line, idx) {
    let lptr = idx - 1;
    let rptr = idx + 1;
    let numberFragment = line[idx];
    while ((line[lptr] && line[lptr].match(/[0-9]/)) || (line[rptr] && line[rptr].match(/[0-9]/))) {
        if (line[lptr] && line[lptr].match(/[0-9]/)) numberFragment = line[lptr] + numberFragment;
        if (line[rptr] && line[rptr].match(/[0-9]/)) numberFragment += line[rptr];
        lptr--;
        rptr++;
    }
    return parseInt(numberFragment);
}

module.exports = {
    adjacentToSymbol,
    findRestOfNumber
}