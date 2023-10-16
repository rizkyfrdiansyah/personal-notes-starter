import React, { useState } from "react";

const InputCatatan = ({ addInput }) => {
  const [addNote, setAddNote] = useState({
    title: "",
    body: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setAddNote({
      ...addNote,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    const message = document.querySelector(".message");
    const { title, body } = addNote;
    event.preventDefault();
    if (title === "" || body === "") {
      message.innerText = "Silahkan isi kolom dulu";
      message.classList.add("empty");

      setTimeout(() => {
        message.innerText = "";
        message.classList.remove("empty");
      }, 3000);
    } else {
      message.innerText = "Catatan Baru Ditambahkan";
      message.classList.add("success");
      setTimeout(() => {
        message.innerText = "";
        message.classList.remove("success");
      }, 3000);

      addInput({ title, body });
      setAddNote({
        title: "",
        body: "",
      });
    }
  };

  const limitTitleHandler = (event) => {
    const { value } = event.target;
    let title = "";
    value.length > 40 ? (title = value.substring(0, 50)) : (title = value);
    setAddNote({
      ...addNote,
      title,
    });
  };
  return (
    <section className="sectionInput">
      <header className="header">
        <h2 className="title">Membuat Catatan Baru</h2>
      </header>
      <span className="message"></span>

      <form onSubmit={onSubmitHandler}>
        <div className="formGroup">
          <label htmlFor="title">
            <h3>Judul</h3>
            <p className="maxTitle">Karakter maksimal {addNote.title.length}/50</p>
          </label>
          <input type="text" name="title" autoComplete="false" value={addNote.title} onChange={limitTitleHandler} placeholder="Masukan judul" />
        </div>

        <div className="formGroup">
          <label htmlFor="title">
            <h3>Catatan</h3>
          </label>
          <textarea type="text" name="body" autoComplete="false" value={addNote.body} onChange={onChangeHandler} placeholder="Masukan catatan" />
        </div>

        <div className="formGroup">
          <button className="buttonAdd" type="submit">
            Tambahkan Catatan Baru
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputCatatan;
