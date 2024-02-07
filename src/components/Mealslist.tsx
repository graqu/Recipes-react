import React from 'react';
import MealItem from './MealItem';

const MealsList: React.FunctionComponent<{
  mealsList: any[];
}> = (props) => {
  return (
    <div>
      <ul>
        {props.mealsList.map((meal) => (
          <MealItem
            name={meal.name}
            ingredients={meal.ingredients}
            key={meal.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
