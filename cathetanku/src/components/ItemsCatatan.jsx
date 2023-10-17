import React from "react";
import { showFormattedDate } from "../utils/InitialData";

const ItemsCatatan = (props) => {
  const { id, title, body, createdAt, onDeleteCatatan, archived, onArchiveCatatan } = props;

  const deleteHandler = () => {
    onDeleteCatatan(id);
  };

  const archiveHandler = () => {
    onArchiveCatatan(id);
  };

  return (
    <li className="catatanItem">
      <article>
        <header className="catatanItemsHeader">
          <h4 className="catatanItemsTitle">{title}</h4>
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
