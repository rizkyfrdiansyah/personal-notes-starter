import React from "react";
import { showFormattedDate } from "../utils/InitialData";

const ItemsCatatan = (props) => {
  const { id, title, body, createdAt, onDeleteNote, archived, onArchiveNote } = props;

  const deleteHandler = () => {
    onDeleteNote(id);
  };

  const archiveHandler = () => {
    onArchiveNote(id);
  };

  return (
    <li className="noteItem">
      <article>
        <header className="noteItemsHeader">
          <h4 className="noteItemsTitle">{title}</h4>
          <small>{showFormattedDate(createdAt)}</small>
        </header>
        <p>{body}</p>
      </article>

      <div className="buttons">
        <button className="buttonDelete" onClick={deleteHandler}>
          Hapus
        </button>
        {archived ? (
          <button className="buttonUnarchive" onClick={archiveHandler}>
            Hapus Arsip
          </button>
        ) : (
          <button className="buttonArchive" onClick={archiveHandler}>
            Arsipkan
          </button>
        )}
      </div>
    </li>
  );
};

export default ItemsCatatan;
