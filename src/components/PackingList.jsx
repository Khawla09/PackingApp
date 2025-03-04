import React from "react";
import Item from "./Item";
function PackingList({ items, onDeleteItem }) {
  // console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
