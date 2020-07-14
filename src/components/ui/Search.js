import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const typeSearch = (p) => {
    setText(p);
    getQuery(p);
  };

  return (
    <section className="search ">
      <form action="">
        <input
          className="form-control"
          placeholder="Search Characters..."
          type="text"
          value={text}
          onChange={(e) => typeSearch(e.target.value)}
          onBlur={(e) => typeSearch(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
