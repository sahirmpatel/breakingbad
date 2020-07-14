import React from "react";
import CharItem from "./CharItem";
import Spinner from "../ui/Spinner";

const CharGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharItem item={item} key={item.char_id} />
      ))}
    </section>
  );
};

export default CharGrid;
