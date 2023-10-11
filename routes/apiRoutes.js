import { Router } from 'express';
import { notes } from '../../db/db.json';
import { createNewNote, validateNote } from '../../lib/notes';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { notes } from '../../db/db.json';
import { createNewNote, validateNote } from '../../lib/notes';

const router = Router();

// GET route for retrieving all the notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// POST route for a new note
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    const id = uuidv4();
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote ({ ...req.body, id }, notes);
        res.json(note);
    }
});

export default router;

// DELETE route for a note
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const noteIndex = notes.findIndex(note => note.id === id);
    notes.splice(noteIndex, 1);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    res.json(notes);
});

module.exports = router;