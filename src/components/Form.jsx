import React from "react";
import { useState } from "react";
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQunatity] = useState();
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    //to clear up input and number return it to "" and 0
    setDescription("");
    setQunatity(1);
    // console.log(newItem);
  }
  function handleChange(event) {
    setDescription(event.target.value);
    // console.log(event.target.value);
  }
  function onQunatityChange(e) {
    setQunatity(Number(e.target.value));
    // console.log(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={onQunatityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={handleChange}
        type="text"
        placeholder="item..."
      />
      <button disabled={!description}>Add</button>
    </form>
  );
}

export default Form;
