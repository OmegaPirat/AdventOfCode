import * as dotenv from 'dotenv'
import fs from 'fs';

dotenv.config();

async function setup() {
    let year = Number(process.argv[2]);
    let day = Number(process.argv[3]);
    let token = process.env.token;

    if (isNaN(year) || year <= 0) {
        console.log(year);
        throw new Error('Invalid argument: Year must be a positive number.');
    }

    if (isNaN(day) || day <= 0) {
        throw new Error('Invalid argument: Day must be a positive number.');
    }

    if(fs.existsSync(`./${year}/${day}`)){
        throw new Error(`Folder for day ${day} in ${year} already exists!`);
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
    fs.writeFileSync(`./${year}/${day}/input-test.dat`, '');
    fs.writeFileSync(`./${year}/${day}/input-main.dat`, input);
    fs.writeFileSync(`./${year}/${day}/README.md`, responseTaskBody);
}

try {
    await setup();
} catch (e) {
    console.error(e.message);
}


