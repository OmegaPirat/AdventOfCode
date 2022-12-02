let part1Config = {
    lose: {
        A: 'Z',
        B: 'X',
        C: 'Y',
        points: 0,
    },
    draw: {
        A: 'X',
        B: 'Y',
        C: 'Z',
        points: 3,
    },
    win: {
        A: 'Y',
        B: 'Z',
        C: 'X',
        points: 6,
    },
    selectionPoints: {
        X: 1,
        Y: 2,
        Z: 3
    }
};

let part2Config = {
    X: {
        A: 'C',
        B: 'A',
        C: 'B',
    },
    Y: {
        A: 'A',
        B: 'B',
        C: 'C',
    },
    Z: {
        A: 'B',
        B: 'C',
        C: 'A',
    },
    selectionPoints: {
        A: 1,
        B: 2,
        C: 3
    },
    outcomePoints: {
        X: 0,
        Y: 3,
        Z: 6
    }
};

export {part1Config, part2Config};
