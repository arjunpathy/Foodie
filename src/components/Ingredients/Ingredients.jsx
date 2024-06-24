
import { useState } from "react"
import "../Ingredients/Ingredients.css"
import ItemButtonComponent from "./ItemButton"
import ItemList from "./ItemList"

const IngredientsComponent = ({selectedIngredients,setSelectedIngredients }) => {

  const pantry = {
    "Fruits": ["Apple", "Orange", "Banana", "Mango", "Avocado", "Peach", "Pear"],
    "Vegetables": ["Tomato", "Potato", "Onion", "Garlic", "Ginger", "Carrot"],
    "Proteins": ["Chicken", "Beef", "Lamb", "Fish", "Pork", "Turkey", "Lobster"],
    "Dairy & Eggs": ["Milk", "Eggs", "Butter", "Cheese", "Yogurt"],
    "Legumes": ["Peas", "Chickpeas", "Black Beans", "Kidney Beans", "White Beans"],
  }

  const [selectedCategory, setSelectedCategory] = useState("Fruits");

  const handleClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
  }
  const addIngredients = (ingredient) => {
    if (selectedIngredients.includes(ingredient))
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient))
    else
      setSelectedIngredients([...selectedIngredients, ingredient]);
  }


  return (
    <div className="container">
      <h1>Ingredients Container</h1>
      <div className="items-list">
        {
          Object.keys(pantry).map(category => {
            return <ItemButtonComponent name={category} key={category} isSelected={selectedCategory == category} onClick={() => { handleClick(category) }} />
          })
        }
      </div>
      <ItemList items={pantry[selectedCategory]} addIngredients={addIngredients} selectedIngredients={selectedIngredients} />
    </div>
  )
}

export default IngredientsComponent