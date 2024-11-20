"use client";

import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const newItem = {
      name,
      category,
      quantity,
    };

    onAddItem(newItem);

    // Reset form
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-2 py-1 bg-red-600 text-white rounded"
          >
            -
          </button>
          <span className="text-white">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-2 py-1 bg-blue-600 text-white rounded"
          >
            +
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white w-full md:w-auto"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
