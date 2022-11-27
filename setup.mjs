import fs from 'fs';

async function setup() {
    let year = '2021';
    let day = process.argv[2] || '1';
    let token = '';

    if (isNaN(Number(day)) || Number(day) <= 0) {
        throw new Error('Invalid argument: Argument must be a positive number.');
    }

    if (!fs.existsSync(`./${year}/${day}`)) {
        fs.mkdirSync(`./${year}/${day}`, {
            recursive: true
        });
    }

    let responseData = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
        headers: {
            'Content-Type': 'text/plain',
            Cookie: `session=${token}`
        }
    });
    let input = await responseData.text();

    let responseTask = await fetch(`https://adventofcode.com/${year}/day/${day}`, {
        headers: {
            'Content-Type': 'text/plain',
            Cookie: `session=${token}`
        }
    });
    let responseTaskBody = await responseTask.text();
    let initialIndexContent = fs.readFileSync('./index-template.mjs').toString();


    fs.writeFileSync(`./${year}/${day}/index.mjs`, initialIndexContent);
    fs.writeFileSync(`./${year}/${day}/input-test.data`, '');
    fs.writeFileSync(`./${year}/${day}/input-main.data`, input);
    fs.writeFileSync(`./${year}/${day}/README.md`, responseTaskBody);
}

try {
    await setup();
} catch (e) {
    console.error(e.message);
}


