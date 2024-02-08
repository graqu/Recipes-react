import React, { useState } from 'react';
import MealItem from './MealItem';

const MealsList: React.FunctionComponent<{
  mealsList: any[];
}> = (props) => {
  const [extendedID, setExtendedID] = useState('');

  const handleExtended = (id: string) => {
    if (id === extendedID) {
      setExtendedID('');
    } else {
      setExtendedID(id);
    }
  };

  return (
    <div>
      <ul>
        {props.mealsList.map((meal) => (
          <MealItem
            id={meal.id}
            name={meal.name}
            ingredients={meal.ingredients}
            reciepe={meal.reciepe}
            openedRecipe={extendedID}
            onExtend={handleExtended}
            key={meal.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
