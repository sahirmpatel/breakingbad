import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharGrid from "./components/characters/CharGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log("Api data-", result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(p) => setQuery(p)} />
      <CharGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
