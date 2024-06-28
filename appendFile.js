// appendFile.js
const fs = require('fs');

const content = '\nThis is appended content';

fs.appendFile('newfile.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content appended successfully');
});
