const fs = require('fs')
const fetchNotes = () => {

    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err) {
        return [];
    }
}

const logNote = (note) => {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
const addingNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note);
}
const removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}
const readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    logNote(filteredNotes[0]);
}
const listingAll = () => {
    var notes = fetchNotes();
    notes.forEach((note) => logNote(note));
}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    listingAll
}