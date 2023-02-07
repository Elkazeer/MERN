const Note = require('../models/note');

const fetchNotes = async (req, res) => {
    // Find the notes
    const notes = await Note.find();

    // Respond with them
    res.json({ notes: notes })
};

const fetchNote = async (req, res) => {
    // Get id off the url
    const noteId = req.params.id;

    // Find the note with the id
    const note = await Note.findById(noteId);

    // Respond with the note
    res.json({ note: note });
};

const createNote = async (req, res) => {
    // Get the send in data off request body
    const title = req.body.title;
    const body = req.body.body;

    // Create a note with it
    const note = await Note.create({
        title: title,
        body: body,
    });

    //Respond with the new note
    res.json({ note: note }); 
};

const updateNote = async (req, res) => {
    // Get the id from the URl
    const noteId = req.params.id;

    // Get the data from the request body
    const title = req.body.title;
    const body = req.body.body;

    // Find and update the record
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        body: body,
    });

    // Find updated node
    const note = await Note.findById(noteId);

    // Respond with it
    res.json({ note: note });
};

const deleteNote = async (req, res) => {
    // Get id off the URL 
    const noteId = req.params.id;

    // Delete the record
    await Note.deleteOne({ id: noteId });

    // Respond
    res.json({ success: 'Record deleted'});
};

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote: fetchNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
};