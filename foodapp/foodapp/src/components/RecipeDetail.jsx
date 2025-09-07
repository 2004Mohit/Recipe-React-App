import { useEffect, useState } from "react";
import styles from "./recipedetail.module.css";
import IngredientsList from "./IngredientsList";

export default function RecipeDetail({ recipeId }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_KEY = "d16cc78f892d4e07a79d936a6df880c1";

  useEffect(() => {
    if (!recipeId) return;

    async function fetchRecipeInfo() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      setLoading(false);
    }
    fetchRecipeInfo();
  }, [recipeId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{recipe.title}</h1>
        <img className={styles.recipeImage} src={recipe.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>👨🏻‍👩🏻‍👧🏻‍👦🏻 {recipe.servings}</strong>
          </span>
          <span>
            <strong>⌚ {recipe.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {recipe.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{recipe.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{recipe.pricePerServing / 100} per Serving</strong>
          </span>
        </div>
        <IngredientsList isLoading={isLoading} recipe={recipe} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
