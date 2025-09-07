import Ingredient from "./Ingredient";

export default function IngredientsList({ isLoading, recipe }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        recipe.extendedIngredients.map((item) => <Ingredient item={item} />)
      )}
    </div>
  );
}
