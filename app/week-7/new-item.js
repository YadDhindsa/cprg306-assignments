'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      name,
      quantity,
      category,
    };

    onAddItem(item);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col space-y-4"
    >
      {/* Name Input Field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        className="w-full p-3 text-gray-900 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 text-gray-900 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
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

      {/* Quantity Controls */}
      <div className="flex items-center justify-between w-full">
        <button
          type="button"
          onClick={decrement}
          className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${
            quantity === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={quantity === 1}
        >
          -
        </button>

        <span className="text-xl font-semibold">{quantity}</span>

        <button
          type="button"
          onClick={increment}
          className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${
            quantity === 20 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Add Item
      </button>
    </form>
  );
}
