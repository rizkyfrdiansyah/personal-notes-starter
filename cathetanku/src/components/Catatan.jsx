import React from "react";

const Catatan = () => {
  return (
    <>
      <header className="note">
        <h1 className="title">Cathetanku</h1>
      </header>

      <main className="noteMain">
        <section className="sectionList">
          <header className="listHeader"></header>
          <span className="message note-list"></span>
        </section>
        <section className="sectionArchive">
          <header className="archiveHeader"></header>
        </section>
      </main>
    </>
  );
};

export default Catatan;
