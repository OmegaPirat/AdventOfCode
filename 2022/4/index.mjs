import fs from 'fs';

function part1(dataSet) {
    let pairs = parseInput(dataSet);
    let count = 0;
    for (let pair of pairs) {
        if ((pair[0] <= pair[2] && pair[1] >= pair[3]) || (pair[0] >= pair[2] && pair[1] <= pair[3])) {
            count++;
        }
    }
    let result = count;
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let pairs = parseInput(dataSet);
    let count = 0;
    for (let pair of pairs) {
        if ((pair[0] <= pair[2] && pair[1] >= pair[2]) || (pair[2] < pair[0] && pair[3] >= pair[0])) {
            count++;
        }
    }
    let result = count;
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim().replace(/\r/g, '');
}

function parseInput(dataSet) {
    return fetchInput(dataSet).split('\n').map(it => it.split(',')
        .flatMap(it => it.split('-').map(Number)));
}

part1('test');
part1('main');
part2('test');
part2('main');
