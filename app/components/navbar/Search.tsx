import React from "react";

const Search = () => {
  return (
    <div className=" hidden md:flex  flex-1 gap-2 ">
      <input
        className="py-2 px-3 rounded-md border-none outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap"
      />
      <button className="p-2 bg-orange-800 rounded-md">Ara</button>
    </div>
  );
};

export default Search;
