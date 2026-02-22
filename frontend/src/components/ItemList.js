import React from "react";

function ItemList({ items }) {
  return (
    <div className="card">
      <h2>All Items</h2>

      {items.map((item) => (
        <div key={item._id}>
          <b>{item.title}</b> ({item.type}) - {item.location}
        </div>
      ))}
    </div>
  );
}

export default ItemList;