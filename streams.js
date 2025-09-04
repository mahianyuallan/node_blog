const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt' ,{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chunk) => {
//     console.log('------New Chunk------');
//     console.log(chunk);
//     writeStream.write('\nNEWCHUNK\n');
//     writeStream.write(chunk);
// });

//piping - same as all the code writen above
readStream.pipe(writeStream);