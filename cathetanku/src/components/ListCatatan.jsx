import React from "react";
import ItemsCatatan from "./ItemsCatatan";

const ListCatatan = (props) => {
  const { notes, onDeleteNote, onArchiveNote, searchTerm } = props;
  let renderedNotes = "";

  if (notes.length > 0) {
    if (searchTerm !== "") {
      let filteredNote = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
      renderedNotes = filteredNote.map((note) => <ItemsCatatan key={note.id} {...note} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />);
    } else {
      renderedNotes = notes.map((note) => {
        return <ItemsCatatan key={note.id} {...note} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />;
      });
    }
  } else {
    return <h5 className="emptyNotesArchive">Catatan Kosong Dalam Arsip</h5>;
  }
  return <ul className="noteList">{renderedNotes}</ul>;
};

export default ListCatatan;
