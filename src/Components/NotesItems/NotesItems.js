import React from "react";
import './NotesItems.css';

const NotesItems = (props) => {
    const {notes,deleteNote} = props;
    const notesList = notes.map((note) => {
        return (
            <div className="note-box" key={note.id}>
                <a href="#" onClick={() => deleteNote(note.id)}><span>&times;</span></a>
                <h3 className="Note auther">{note.authorName}</h3>
                <textarea className="Note content" value={note.content}></textarea>
            </div>
        )
    })
    return (
        <div className="notes-page">
            {notesList}    
        </div>
    )
}

export default NotesItems;