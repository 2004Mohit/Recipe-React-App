import styles from "./recipeItem.module.css";

export default function RecipeItem({ recipe, setRecipeId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(recipe.id);
            setRecipeId(recipe.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
