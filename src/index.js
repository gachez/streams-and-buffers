const axios = require('axios');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writme.txt');

// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received..');
//     console.log(chunk);
//     myWriteStream.write(chunk);
// });

//pipes
myReadStream.pipe(myWriteStream);