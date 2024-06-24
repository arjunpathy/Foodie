
import './App.css'
import { useState } from "react"

import IngredientsComponent from "./components/Ingredients/Ingredients.jsx";
import KitchenComponent from "./components/Kitchen/Kitchen.jsx";
import RecipeComponent from "./components/Recipe/Recipe.jsx";


function App() {

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipes, setRecipes] = useState(null);

  return (
    < div className="mainContainer">
      <IngredientsComponent selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients}/>
      <KitchenComponent selectedIngredients={selectedIngredients} recipes={recipes} setRecipes={setRecipes}/>
      <RecipeComponent  recipes={recipes} pageCount={recipes?.length}/>
    </div>
  )
}

export default App
