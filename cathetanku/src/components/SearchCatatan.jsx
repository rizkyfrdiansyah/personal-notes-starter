import React from "react";

const SearchCatatan = ({ onSearchCatatan }) => {
  const onSearchHandler = (event) => {
    const { value } = event.target;
    onSearchCatatan(value);
  };

  return <input type="text" placeholder="Cari Judul" autoComplete="false" name="title" className="inputSearch" onChange={onSearchHandler} />;
};

export default SearchCatatan;
