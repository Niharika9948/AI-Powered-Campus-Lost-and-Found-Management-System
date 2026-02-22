import React, { useState } from "react";
import axios from "axios";

function ItemForm({ fetchItems, setMatches }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    location: ""
  });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/items", form);
    fetchItems();
  };

  const findMatches = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/items/match",
      form
    );
    setMatches(res.data);
  };

  return (
    <div className="card">
      <h2>Add Item</h2>

      <input placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })} />

      <input placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })} />

      <input placeholder="Location"
        onChange={(e) => setForm({ ...form, location: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={findMatches}>Find Matches 🤖</button>
    </div>
  );
}

export default ItemForm;