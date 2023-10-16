import React, { useState } from "react";
import InputCatatan from "./InputCatatan";
import { getInitialData, showFormattedDate } from "../utils/InitialData";
import ListCatatan from "./ListCatatan";
import SearchCatatan from "../components/SearchCatatan";
import TitleCatatan from "../components/TitleCatatan";

const Catatan = () => {
  const [initialData, setInitialData] = useState(getInitialData());
  const [note, setNote] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const message = document.querySelector(".message.noteList");

  const inputCatatanHandler = ({ title, body }) => {
    let newNote = [
      ...note,
      {
        id: +new Date(),
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      },
    ];
    setNote(newNote);
    setInitialData(newNote);
  };

  const deleteNoteHandler = (id) => {
    let filteredNote = note.filter((note) => note.id !== id);
    setNote(filteredNote);
    setInitialData(filteredNote);
    message.innerText = "Catatan Dihapus";
    message.classList.add("empty");
    setTimeout(() => {
      message.innerText = "";
      message.classList.remove("empty");
    }, 3000);
  };

  const archiveNoteHandler = (id) => {
    setNote(
      note.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      })
    );
    setInitialData(note);
    message.innerText = "Sukses Nih Bro";
    message.classList.add("success");
    setTimeout(() => {
      message.innerText = "";
      message.classList.remove("success");
    }, 3000);
  };

  const resetNoteHandler = () => {
    setNote(initialData);
  };
  const searchCatatanHandler = (searchTitle) => {
    resetNoteHandler();
    setSearchTerm(searchTitle);
  };

  return (
    <>
      <header className="note">
        <h1 className="title">CathetanKu</h1>
      </header>

      <main className="noteMain">
        <InputCatatan addInput={inputCatatanHandler} />
        <section className="sectionList">
          <header className="listHeader">
            <TitleCatatan />
            <SearchCatatan onSearchCatatan={searchCatatanHandler} />
          </header>
          <span className="message noteList"></span>
          <ListCatatan searchTerm={searchTerm} notes={note.filter((note) => !note.archived)} onDeleteNote={deleteNoteHandler} onArchiveNote={archiveNoteHandler} />
        </section>
        <section className="sectionArchive">
          <header className="archiveHeader">
            <TitleCatatan title="Arsip" />
          </header>
          <ListCatatan searchTerm={searchTerm} notes={note.filter((note) => note.archived)} onDeleteNote={deleteNoteHandler} onArchiveNote={archiveNoteHandler} />
        </section>
      </main>
    </>
  );
};

export default Catatan;
