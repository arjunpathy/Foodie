import React from 'react'
import { Button } from 'react-bootstrap';
import "../Ingredients/ItemButton.css"


const ItemButtonComponent = ({ isSelected, onClick, name }) => {
  return (
    <Button className='item-btn' variant={isSelected ? "success" : "outline-secondary"} onClick={onClick}>
      {name}
    </Button>
  )
}

export default ItemButtonComponent