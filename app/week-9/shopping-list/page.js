"use client";

import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import itemsData from "../../week-8/items.json"; 
import ItemList from "../../week-8/item-list";
import NewItem from "../../week-8/new-item";
import MealIdeas from "../../week-8/meal-ideas";

const ShoppingListPage = () => {
  const { user } = useUserAuth(); 
  const router = useRouter(); 
  const [items, setItems] = useState(itemsData); 
  const [selectedItemName, setSelectedItemName] = useState('');

  
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); 
    }
  }, [user, router]);

  
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

 
  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-900 p-6 flex items-start space-x-8">
      <div className="max-w-xl w-full bg-gray-800 rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Shopping List</h1>
        
        {/* New Item Form */}
        <NewItem onAddItem={handleAddItem} />
        
        {/* Item List */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Meal Ideas Section */}
      <div className="w-full max-w-md">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
};

export default ShoppingListPage;
