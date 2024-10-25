"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  
  const sortedItems = [...itemsData].sort((a, b) => {
    return sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category);
  });

  
  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {})
    : null;

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg ${sortBy === "category" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory((prev) => !prev)}
          className={`px-4 py-2 rounded-lg ${groupByCategory ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
          {groupByCategory ? "Ungroup by Category" : "Group by Category"}
        </button>
      </div>

      <ul className="space-y-4">
        {groupByCategory
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h3 className="capitalize text-xl font-bold text-gray-700 mb-2">{category}</h3>
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
