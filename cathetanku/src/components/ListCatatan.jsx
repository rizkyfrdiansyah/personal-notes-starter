import React from "react";
import ItemsCatatan from "./ItemsCatatan";

const ListCatatan = (props) => {
  const { catatans, onDeleteCatatan, onArchiveCatatan, searchTerm } = props;
  let renderedCatatans = "";

  if (catatans.length > 0) {
    if (searchTerm !== "") {
      let filteredCatatan = catatans.filter((catatan) => catatan.title.toLowerCase().includes(searchTerm.toLowerCase()));
      renderedCatatans = filteredCatatan.map((catatan) => <ItemsCatatan key={catatan.id} {...catatan} onDeleteCatatan={onDeleteCatatan} onArchiveCatatan={onArchiveCatatan} />);
    } else {
      renderedCatatans = catatans.map((catatan) => <ItemsCatatan key={catatan.id} {...catatan} onDeleteCatatan={onDeleteCatatan} onArchiveCatatan={onArchiveCatatan} />);
    }
  } else {
    return <h5 className="emptyCatatanArchive">Catatan Kosong Dalam Arsip</h5>;
  }

  return <ul className="catatanList">{renderedCatatans}</ul>;
};

export default ListCatatan;
