import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
//In Real-World Application(In case of deploy), You should declare APIKEY in Environment Variables.
const API_KEY = "d16cc78f892d4e07a79d936a6df880c1";

export default function Search({ recipeData, setRecipeData }) {
  const [inputVal, setInputVal] = useState("");
  const [query, setQuery] = useState("");
  //Syntax of useEffect Hook
  useEffect(() => {
    if (!query) return;

    console.log(query);

    async function fetchFood() {
      //Dynamic String (${URL},etc) passing to built-in function fetch
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
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
