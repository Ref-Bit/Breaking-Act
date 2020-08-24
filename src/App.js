import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Grid from "./components/characters/Grid";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <Grid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
