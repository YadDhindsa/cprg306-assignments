"use client";

import { useState } from "react";

const ItemList = ({ items, onDeleteItem, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name"); // Default sorting by name

  // Sort items based on "name" or "category"
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="space-y-4">
      {/* Sorting Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-300"
          } rounded`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 ${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-300"
          } rounded`}
        >
          Category
        </button>
      </div>

      {/* Items List */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded"
          >
            <div
              className="cursor-pointer text-white"
              onClick={() => onItemSelect(item.name)}
            >
              <div className="font-bold">{item.name}</div>
              <div className="text-sm text-gray-400">
                Category: {item.category}
              </div>
              <div className="text-sm text-gray-400">
                Quantity: {item.quantity}
              </div>
            </div>
            <button
              onClick={() => onDeleteItem(item.id)}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
