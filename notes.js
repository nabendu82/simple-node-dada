const fs = require("fs");

const newNote = (title, body) => {
    const notes = uploadNotes();
    notes.push({ title, body });
    fs.writeFileSync('notepad.json', JSON.stringify(notes));
}

const uploadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notepad.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

module.exports = { newNote }