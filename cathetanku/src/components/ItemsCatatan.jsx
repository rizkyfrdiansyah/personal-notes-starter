import React from "react";

const ItemsCatatan = () => {
  return (
    <li className="noteItem">
      <article>
        <header className="noteItemsHeader">
          <h4 className="noteItemsTitle">Title</h4>
          <small>SSS</small>
        </header>
        <p>body</p>
      </article>

      <div className="buttons">
        <button className="buttonDelete">Delete</button>
        <button className="buttonUnarchive">Un Archive</button>
        <button className="buttonArchive">Archive</button>
      </div>
    </li>
  );
};

export default ItemsCatatan;
