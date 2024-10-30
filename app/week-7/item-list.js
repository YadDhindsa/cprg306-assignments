"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => { 
  const [sortBy, setSortBy] = useState("name"); 
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sort items based on the chosen sorting criteria
  const sortedItems = [...items].sort((a, b) => {
    return sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category);
  });

  // Group items by category if grouping is enabled
  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {})
    : null;

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      {/* Sorting and Grouping Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 font-medium rounded-lg ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-blue-300 text-gray-800"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 font-medium rounded-lg ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-blue-300 text-gray-800"}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(prev => !prev)}
          className={`px-4 py-2 font-medium rounded-lg ${groupByCategory ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
          {groupByCategory ? "Ungroup by Category" : "Group by Category"}
        </button>
      </div>

      {/* Render Items: Grouped or Sorted */}
      <ul className="space-y-4">
        {groupByCategory
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h3 className="capitalize text-xl font-bold text-gray-300 mb-3">{category}</h3>
                <ul className="space-y-2">
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;