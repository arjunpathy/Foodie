import React, { useState } from 'react'

import Pagination from 'react-bootstrap/Pagination';


const RecipeComponent = ({ recipes, pageCount }) => {


  let items = [];
  const [currentPage, setCurrentPage] = useState(0);
  let url = pageCount && recipes[currentPage]['image'] ? recipes[currentPage]['image'] : "";
  let title = pageCount ? recipes[currentPage]['title'] : "No Recipes Found!";
  let instructions = pageCount ? recipes[currentPage]['analyzedInstructions'][0]['steps'] : [];

  const handleClick = (page) => {
    setCurrentPage(page)
  }

  for (let number = 0; number < pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
        {number + 1}
      </Pagination.Item>
    );
  }


  return (
    <div className='container'>
      <h1>Recipe Component</h1>
      <Pagination>{items}</Pagination>
      <div className='recipe_container'>
        {url ? <img src={url}></img> : ""}
        <h4>{title}</h4>
        <ol className='list'>
          {
            instructions.map((instruction, index) => {
              return <li key={index}> {instruction.step} </li>
            })
          }

        </ol>
      </div>
    </div>
  )
}

export default RecipeComponent