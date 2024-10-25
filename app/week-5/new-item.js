'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState(""); 
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

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
    <form onSubmit={handleSubmit} className="bg-[#2B2B2F] text-[#E0E1E3] p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center space-y-4">
      {/* Name Input Field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        className="w-full p-3 text-[#2B2B2F] bg-[#F5F5F7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
        required 
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 text-[#2B2B2F] bg-[#F5F5F7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
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
      <div className="flex items-center space-x-6">
        <button
          type="button"
          onClick={decrement}
          className={`px-4 py-2 rounded-lg font-semibold ${
            quantity === 1 ? 'bg-[#6B6B75] cursor-not-allowed' : 'bg-[#FF4D4D] hover:bg-[#FF6666]'
          }`}
          disabled={quantity === 1}
        >
          -
        </button>

        <span className="text-2xl font-bold">{quantity}</span>

        <button
          type="button"
          onClick={increment}
          className={`px-4 py-2 rounded-lg font-semibold ${
            quantity === 20 ? 'bg-[#6B6B75] cursor-not-allowed' : 'bg-[#4CAF50] hover:bg-[#66BB6A]'
          }`}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#3B82F6] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#5694F6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
      >
        Add Item
      </button>
    </form>
  );
}
