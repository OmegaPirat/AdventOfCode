import fs from 'fs';

function part1(dataSet) {
    let input = parseInput(dataSet);
    let maxima = input.map(it => it.reduce((prev, curr) => prev + curr, 0));

    let result = Math.max(...maxima);
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let input = parseInput(dataSet);
    let maxima = input.map(it => it.reduce((prev, curr) => prev + curr, 0)).sort((first, second) => second - first);
    let result = maxima[0] + maxima[1] + maxima[2];
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim().replace(/\r/g, '');
}

function parseInput(dataSet) {
    return fetchInput(dataSet).split('\n\n').map(it => it.split('\n').map(it => Number(it)));
}

part1('test');
part1('main');
part2('test');
part2('main');
