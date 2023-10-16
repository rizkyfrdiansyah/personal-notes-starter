import React from "react";

const InputCatatan = () => {
  return (
    <section className="sectionInput">
      <header className="header">
        <h2 className="title">Membuat Catatan Baru</h2>
      </header>
      <span className="message"></span>

      <div className="formGroup">
        <label htmlFor="title">
          <h3>Title</h3>
          <p className="maxTitle">Characters Max</p>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="title">
          <h3>Catatan</h3>
        </label>
      </div>

      <div className="formGroup">
        <button className="buttonAdd" type="submit">
          Add New Note
        </button>
      </div>
    </section>
  );
};

export default InputCatatan;
