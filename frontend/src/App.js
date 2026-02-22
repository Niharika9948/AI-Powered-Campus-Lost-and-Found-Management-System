import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import MatchList from "./components/MatchList";

import "./styles/styles.css";

function App() {
  const [items, setItems] = useState([]);
  const [matches, setMatches] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items");
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <ItemForm fetchItems={fetchItems} setMatches={setMatches} />
        <ItemList items={items} />
        <MatchList matches={matches} />
      </div>
    </div>
  );
}

export default App;