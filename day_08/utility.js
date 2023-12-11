function navigateNetwork(input) {
    const [cmdsString, networkString] = input.split("\n\n");
    const cmds = cmdsString.match(/[A-Z]+/)[0];
    let iterator = 0;
    let currentValue = 'AAA';
    let howManyEndWithA = 0;
    const network = networkString.split("\n").reduce((acc, line) => {
      const [key, values] = line.split(" = ");
      if (key[2] === 'A') howManyEndWithA++;
      acc[key] = values.match(/[A-Z]+/g);
      return acc;
    }, {});
    console.log("Number that end with A", howManyEndWithA);
    let whichNode = cmds[iterator++ % cmds.length] === "L" ? 0 : 1;
    currentValue = network[currentValue][whichNode];
    while (currentValue !== "ZZZ") {
        whichNode = cmds[iterator++ % cmds.length] === "L" ? 0 : 1;
        currentValue = network[currentValue][whichNode];
        if (currentValue === 'ZZZ') console.log('***********************');
    }
    return iterator;
  }

module.exports = {
    navigateNetwork
}