import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
//In Real-World Application(In case of deploy), You should declare APIKEY in Environment Variables.
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export default function Search({ recipeData, setRecipeData }) {
  const [inputVal, setInputVal] = useState("");
  const [query, setQuery] = useState("");
  //Syntax of useEffect Hook
  useEffect(() => {
    if (!query) return;

    console.log("query : ", query);

    async function fetchFood() {
      //Dynamic String (${URL},etc) passing to built-in function fetch
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setRecipeData(data.results);
    }

    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
        placeholder="Enter what you want...."
      />
      <button className={styles.searchIcon} onClick={() => setQuery(inputVal)}>
        🔍
      </button>
    </div>
  );
}
