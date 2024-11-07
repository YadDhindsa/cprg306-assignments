// meal-ideas.js
"use client";
import React, { useState, useEffect } from 'react';


const fetchMealIdeas = async (ingredient) => {
    const cleanedIngredient = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};


const fetchMealDetails = async (idMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error("Error fetching meal details:", error);
        return null;
    }
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [visibleIngredients, setVisibleIngredients] = useState({});
    const [mealDetails, setMealDetails] = useState({});


    useEffect(() => {
        async function loadMealIdeas() {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }

        if (ingredient) loadMealIdeas();
    }, [ingredient]);

   
    const toggleIngredientsVisibility = async (idMeal) => {
        setVisibleIngredients((prev) => ({
            ...prev,
            [idMeal]: !prev[idMeal],
        }));

        if (!visibleIngredients[idMeal]) {
            const meal = await fetchMealDetails(idMeal);
            if (meal) {
                const ingredients = {};
                Object.keys(meal).forEach((key) => {
                    if (key.startsWith("strIngredient") && meal[key]) {
                        const index = key.replace("strIngredient", "");
                        ingredients[meal[key]] = meal[`strMeasure${index}`];
                    }
                });
                setMealDetails((prev) => ({
                    ...prev,
                    [idMeal]: ingredients,
                }));
            }
        }
    };

    return (
        <div className="meal-ideas p-4 bg-gray-800 rounded-lg shadow-lg text-white">
            {meals.length === 0 ? (
                <p>No meal ideas found for {ingredient}</p>
            ) : (
                <>
                    <header>
                        <h2 className="font-bold text-xl mb-4">Meal Ideas with "{ingredient}"</h2>
                    </header>
                    <div className="space-y-4">
                        {meals.map((meal) => (
                            <div key={meal.idMeal} className="bg-gray-700 p-4 rounded-lg shadow-md">
                                <div
                                    onClick={() => toggleIngredientsVisibility(meal.idMeal)}
                                    className="cursor-pointer text-lg font-semibold mb-2"
                                >
                                    {meal.strMeal}
                                </div>
                                {visibleIngredients[meal.idMeal] && (
                                    <div className="mt-2">
                                        <h4 className="font-semibold">Ingredients:</h4>
                                        <ul className="pl-4 list-disc">
                                            {mealDetails[meal.idMeal] ? (
                                                Object.entries(mealDetails[meal.idMeal]).map(([ingredient, measurement]) => (
                                                    <li key={ingredient} className="text-gray-300">
                                                        {ingredient}: {measurement}
                                                    </li>
                                                ))
                                            ) : (
                                                <p className="text-gray-400">Loading ingredients...</p>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
