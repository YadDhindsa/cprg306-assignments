"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]); // Items state
  const [selectedItemName, setSelectedItemName] = useState(""); // For meal ideas

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      const addedItem = { id: itemId, ...newItem };
      setItems((prevItems) => [...prevItems, addedItem]); // Update state
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Shopping List</h1>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList
              items={items}
              onDeleteItem={handleDeleteItem}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Meal Ideas</h2>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-gray-400">Select an item to see meal ideas</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListPage;
