// writeFile.js
const fs = require('fs');

const content = 'Hello, this is a new file';

fs.writeFile('newfile.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
});
