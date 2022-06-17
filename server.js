const fs = require('fs');

const writeAndappend = () => {
    console.log('Writing and appending to file');
    fs.writeFileSync('notepad.txt', 'I live in Bhopal and i am a trainer.');
    fs.appendFileSync('notepad.txt', ' I teach web-app development');
}

module.exports = writeAndappend