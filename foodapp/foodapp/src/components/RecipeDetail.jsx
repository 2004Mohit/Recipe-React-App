import { useEffect, useState } from "react";

export default function RecipeDetail({ recipeId }) {
  const [recipe, setRecipe] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_KEY = "d16cc78f892d4e07a79d936a6df880c1";

  useEffect(() => {
    if (!recipeId) return;

    async function fetchRecipeInfo() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
    }
    fetchRecipeInfo();
  }, [recipeId]);

  return (
    <div>
      Recipe Detail : {recipeId}
      {recipe.title}
      <img src={recipe.image} alt="" />
    </div>
  );
}
