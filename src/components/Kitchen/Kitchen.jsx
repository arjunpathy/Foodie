import React, { useState, useEffect } from 'react';
import { Badge, Stack, Button } from 'react-bootstrap'


const KitchenComponent = ({ selectedIngredients, setRecipes }) => {

  const [error, setError] = useState(null);



  const fetchData = async () => {
    const apiKey = "2071c2e73e8543e6a587aa659d2d4d80" //process.env.REACT_APP_FOODIE_API_KEY
    const ingredients = selectedIngredients.join(',+');
    const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&addRecipeInstructions=true&number=5&apiKey=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let responseJson = await response.json();
      let ids =  responseJson.results.map(item => item.id).join(',');

      const recipeUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${apiKey}`;
      const resp = await fetch(recipeUrl, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      responseJson = await resp.json();
      setRecipes(responseJson);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container'>
      <h1>KitchenComponent</h1>

      <div className='kitchen_container'>
        {selectedIngredients.map(ing => {
          return <div className='kitchen_container_items' key={ing}>{ing} </div>
        })}
      </div>

      <div className='p-3'>
        <Button variant="success" onClick={() => { fetchData() }}> Submit </Button>
      </div>
    </div>

  )
}

export default KitchenComponent