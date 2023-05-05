
const path = require('node:path'); // модуль для работы с путями;
const fs = require('node:fs'); // подключил модуль fs;

const PATH_TO_FILE = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(PATH_TO_FILE, 'utf-8');

let data = '';
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log(data));

