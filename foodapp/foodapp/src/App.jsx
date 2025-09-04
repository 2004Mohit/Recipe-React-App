import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />

      {/*👇🏼 Structural Component && Also It is Nesting Component [Parent(child)]*/}

      <Container>
        <InnerContainer>
          {/*👇🏼 It goes like "export default function Container({ RecipeList }) {}" */}
          <RecipeList setRecipeId={setRecipeId} recipeData={recipeData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetail recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
