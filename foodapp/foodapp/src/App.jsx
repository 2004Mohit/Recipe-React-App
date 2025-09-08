import { useReducer, useState } from "react";
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

/*---------------------------------------For Understanding of useReducer Function----------------------------------------*/

// function App() {
//   //useReducer : We have state, reducer function and action to Dispatch
//   //syntax : " [state, dispatch function] = useReducer(reducer function, initial value) ";
//   const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

//   //reducer : Reducer Function should accept 2 parameters (i.e. state & action)
//   function reducer(state, action) {
//     if (action.type == "increment") {
//       return { ...state, count: state.count + action.payload }; //state + action.payload (we can use state.incrementBy);
//     }

//     if (action.type == "decrement") {
//       return { ...state, count: state.count - state.incrementBy }; //state - state.incrementBy (we can use action.payload);
//     }

//     if (action.type == "setIncrement") {
//       return { ...state, incrementBy: action.payload }; //state - action.payload;
//     }
//   }

//   return (
//     <div>
//       useReducer : {state.count}
//       <input
//         value={state.incrementBy}
//         onChange={(e) =>
//           // We are setting "state.incrementBy" value in reducer function here
//           dispatch({ type: "setIncrement", payload: Number(e.target.value) })
//         }
//         type="text"
//         name=""
//       />
//       {/*dispatch({ type: what action i want, payload: value i want to use in action })*/}
//       {/*dispatch : It call reducer() function and access type & payload by action parameter*/}
//       <button
//         onClick={() =>
//           // Because we are using "action.payload" in reducer function
//           dispatch({ type: "increment", payload: state.incrementBy })
//         }
//       >
//         Increment Count
//       </button>
//       <button
//         onClick={() =>
//           // Because we are using "state.incrementBy" in reducer function
//           dispatch({ type: "decrement" })
//         }
//       >
//         Decrement Count
//       </button>
//     </div>
//   );
// }

// export default App;
