import fs from 'fs';

function part1(dataSet) {
    let result = undefined;
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let result = undefined;
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim();
}

part1('test');
part1('main');
part2('test');
part2('main');
