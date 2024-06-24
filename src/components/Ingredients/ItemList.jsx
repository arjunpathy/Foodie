import React from 'react'
import Form from 'react-bootstrap/Form';

const ItemList = ({ items,addIngredients, selectedIngredients }) => {
    return (
        <div>
            {items.map((item) => {
                return <Form.Check
                    reverse
                    label={item}
                    checked={selectedIngredients.includes(item)}
                    name="group1"
                    type="checkbox"
                    id={`reverse-checkbox-${item}`}
                    key={item}
                    className='custom_list_item'
                    onChange={() =>addIngredients(item)}
                />
            })
            }

        </div>
    )
}

export default ItemList 