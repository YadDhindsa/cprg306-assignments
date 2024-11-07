// new-item.js
"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substr(2, 9), // Unique ID for the new item
      name,
      quantity,
      category,
    };

    
    onAddItem(newItem);

    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  // Increment quantity (max 20)
  const incrementQuantity = () => {
    if (quantity < 20) setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement quantity (min 1)
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        className="w-full p-3 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen Foods</option>
        <option value="canned">Canned Goods</option>
        <option value="dry">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <div className="flex items-center justify-between w-full">
        <button
          type="button"
          onClick={decrementQuantity}
          className={`border-2 border-blue-900 px-3 py-1 rounded-md ${
            quantity === 1 ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={quantity === 1}
        >
          -
        </button>
        
        <span className="text-lg mx-4">{quantity}</span>

        <button
          type="button"
          onClick={incrementQuantity}
          className={`border-2 border-blue-900 px-3 py-1 rounded-md ${
            quantity === 20 ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Add Item
      </button>
    </form>
  );
}
