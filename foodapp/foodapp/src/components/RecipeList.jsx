import RecipeItem from "./RecipeItem";

export default function RecipeList({ setRecipeId, recipeData }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <RecipeItem setRecipeId={setRecipeId} recipe={recipe} />
      ))}
    </div>
  );
}
