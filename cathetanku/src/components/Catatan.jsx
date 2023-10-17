import React, { useState } from "react";
import InputCatatan from "./InputCatatan";
import { getInitialData, showFormattedDate } from "../utils/InitialData";
import ListCatatan from "./ListCatatan";
import SearchCatatan from "../components/SearchCatatan";
import TitleCatatan from "../components/TitleCatatan";

const Catatan = () => {
  const [initialData, setInitialData] = useState(getInitialData());
  const [catatan, setCatatan] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const message = document.querySelector(".message.catatanList");

  const inputCatatanHandler = ({ title, body }) => {
    let newCatatan = [
      ...catatan,
      {
        id: +new Date(),
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      },
    ];
    setCatatan(newCatatan);
    setInitialData(newCatatan);
  };

  const deleteCatatanHandler = (id) => {
    let filteredCatatan = catatan.filter((catatan) => catatan.id !== id);
    setCatatan(filteredCatatan);
    setInitialData(filteredCatatan);
    message.innerText = "Catatan Dihapus";
    message.classList.add("empty");
    setTimeout(() => {
      message.innerText = "";
      message.classList.remove("empty");
    }, 3000);
  };

  const archiveCatatanHandler = (id) => {
    setCatatan(
      catatan.map((catatan) => {
        if (catatan.id === id) {
          catatan.archived = !catatan.archived;
        }
        return catatan;
      })
    );
    setInitialData(catatan);
    message.innerText = "Sukses Nih Bro";
    message.classList.add("success");
    setTimeout(() => {
      message.innerText = "";
      message.classList.remove("success");
    }, 3000);
  };

  const resetCatatanHandler = () => {
    setCatatan(initialData);
  };

  const searchCatatanHandler = (searchTitle) => {
    resetCatatanHandler();
    setSearchTerm(searchTitle);
  };

  return (
    <div>
      <header className="catatan">
        <h1 className="title">CathetanKu</h1>
      </header>

      <main className="catatanMain">
        <InputCatatan addInput={inputCatatanHandler} />
        <section className="sectionList">
          <header className="listHeader">
            <TitleCatatan />
            <SearchCatatan onSearchCatatan={searchCatatanHandler} />
          </header>
          <span className="message catatanList"></span>
          <ListCatatan searchTerm={searchTerm} catatans={catatan.filter((catatan) => !catatan.archived)} onDeleteCatatan={deleteCatatanHandler} onArchiveCatatan={archiveCatatanHandler} />
        </section>
        <section className="sectionArchive">
          <header className="archiveHeader">
            <TitleCatatan title="Arsip" />
          </header>
          <ListCatatan searchTerm={searchTerm} catatans={catatan.filter((catatan) => catatan.archived)} onDeleteCatatan={deleteCatatanHandler} onArchiveCatatan={archiveCatatanHandler} />
        </section>
      </main>
    </div>
  );
};

export default Catatan;
