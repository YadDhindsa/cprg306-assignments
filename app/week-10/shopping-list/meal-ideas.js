"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <ul className="text-white">
      {meals.map((meal) => (
        <li key={meal.idMeal}>{meal.strMeal}</li>
      ))}
    </ul>
  );
};

export default MealIdeas;
