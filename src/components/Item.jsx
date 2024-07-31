import React from "react";

function Item({ item, onDeleteItem }) {
  function handleDelete() {
    onDeleteItem(item.id);
  }
  return (
    <div>
      <li>
        {/* <input type="checkbox" /> */}
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>

        <button onClick={handleDelete}>❌</button>
        {/* onClick={() => onDeleteItem(item.id)} */}
      </li>
    </div>
  );
}

export default Item;
