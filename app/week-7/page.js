"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  // it  handle adding a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-800 rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Shopping List</h1>
        
        {/* Form to Add New Item */}
        <NewItem onAddItem={handleAddItem} />

        {/* Display List of Items */}
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
