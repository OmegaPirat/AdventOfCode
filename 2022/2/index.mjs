import fs from 'fs';
import {part1Config, part2Config} from "./config.mjs";

function part1(dataSet) {
    let input = parseInput(dataSet);
    let config = part1Config;
    let result = input.reduce((prev, curr) => {
        let newScore = prev;
        let [opponent, player] = curr;
        if (player === config.win[opponent]) {
            newScore += config.win.points;
        } else if (player === config.draw[opponent]) {
            newScore += config.draw.points;
        }
        newScore += config.selectionPoints[player];
        return newScore;
    }, 0);
    console.log(`The solution of part 1 for ${dataSet} data is ${result}.`)
}

function part2(dataSet) {
    let input = parseInput(dataSet);
    let config = part2Config;
    let result = input.reduce((prev, curr) => {
        let newScore = prev;
        let [opponent, outcome] = curr;
        let player = config[outcome][opponent];
        newScore += config.outcomePoints[outcome];
        newScore += config.selectionPoints[player];
        return newScore;
    }, 0);
    console.log(`The solution of part 2 for ${dataSet} data is ${result}.`)
}

function fetchInput(dataSet) {
    return fs.readFileSync(`./input-${dataSet}.dat`).toString().trim().replace(/\r/g, '');
}

function parseInput(dataSet) {
    return fetchInput(dataSet).split('\n').map(it => it.split(' '));
}

part1('test');
part1('main');
part2('test');
part2('main');
