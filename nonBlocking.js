// nonBlocking.js
const fs = require('fs');

console.log('Start reading file...');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log('End of the program');
