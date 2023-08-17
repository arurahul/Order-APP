import React from 'react';
import MealItemForm from './MealItemForm';

function MealItem(props) {
    const price=`£${props.Price.toFixed(2)}`;
    return (
        <li>
            <div>
                <h3>{props.Name}</h3>
            </div>
            <div>
                <h3>{props.Description}</h3>
            </div>
            <div>
                <h3>{price}</h3>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>

    );
}

export default MealItem;