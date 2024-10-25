"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment and Decrement functions with limits
  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col items-center p-4 bg-[#1E201E] text-white rounded-md">
      <div className="text-lg font-bold mb-2">Quantity: {quantity}</div>
      <div className="flex space-x-4">
        <button 
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-1 rounded-md border-2 border-blue-900 ${
            quantity === 1 ? 'bg-[#B4B4B8] cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          -
        </button>
        
        <span className="text-lg font-semibold mx-4">{quantity}</span>
        
        <button 
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-1 rounded-md border-2 border-blue-900 ${
            quantity === 20 ? 'bg-[#B4B4B8] cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
