const axios = require('axios');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/data.ods', 'utf8');

myReadStream.on('data', (chunk) => {
    console.log('new chunk received..');
    console.log(chunk);
});