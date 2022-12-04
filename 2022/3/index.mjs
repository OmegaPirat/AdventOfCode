import fs from 'fs';

function part1(dataSet) {
    let input = parseInputPart1(dataSet);
    let priority = 0;
    for (let line of input) {
        let [firstHalf, secondHalf] = line;
        secondHalf = [...new Set(secondHalf.split(''))].join('');
        for (let char of secondHalf) {
            if (firstHalf.includes(char)) {
               priority += charToPoints(char);
               break;
            }
        }
    }
    let result = priority;
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let input = parseInputPart2(dataSet);
    let priority = 0;
    for(let group of input){
        let [first, second, third] = group;
        for(let char of third){
            if(first.includes(char) && second.includes(char)){
                priority += charToPoints(char);
                break;
            }
        }
    }
    let result = priority;
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim().replace(/\r/g, '');
}

function parseInputPart1(dataSet) {
    let input = fetchInput(dataSet).split('\n');
    return input.map(it => {
        let firstHalf = it.slice(0, it.length / 2);
        let secondHalf = it.slice(it.length / 2);
        return [firstHalf, secondHalf];
    })
}

function parseInputPart2(dataSet) {
    let input = fetchInput(dataSet).split('\n');
    let finalInput = [];
    for (let i = 0; i < input.length - 2; i+=3) {
            finalInput.push([input[i], input[i + 1], input[i + 2]]);
    }
    return finalInput;
}

function charToPoints(char){
    if (char.toLowerCase() === char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
       return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
}

part1('test');
part1('main');
part2('test');
part2('main');
