import fs from 'fs';

function part1(dataSet) {
    let input = fetchInput(dataSet).split('\n').map(it => Number(it));

    let numbers = twoNumbersAddUpTo2020(input);
    let result = numbers[0] * numbers[1];
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let input = fetchInput(dataSet).split('\n').map(it => Number(it));

    let numbers = threeNumbersAddUpTo2020(input);
    let result = numbers[0] * numbers[1] * numbers[2];
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim();
}

function twoNumbersAddUpTo2020(input) {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === 2020) {
                return [input[i], input[j]];
            }
        }
    }
}

function threeNumbersAddUpTo2020(input) {
    for (let i = 0; i < input.length - 2; i++) {
        for (let j = i + 1; j < input.length - 1; j++) {
            for (let k = j + 1; k < input.length; k++) {
                if (input[i] + input[j] + input[k] === 2020) {
                    return [input[i], input[j], input[k]];
                }
            }
        }
    }
}

part1('test');
part1('main');
part2('test');
part2('main');
