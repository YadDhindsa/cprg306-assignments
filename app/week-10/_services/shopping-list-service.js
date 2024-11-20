import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsRef);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const itemRef = doc(db, `users/${userId}/items/${itemId}`);
    await deleteDoc(itemRef);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
