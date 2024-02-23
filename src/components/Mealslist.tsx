import React, { useState } from 'react';
import MealItem from './MealItem';
import { fullMealDataT } from '@/models/formData';

const MealsList: React.FunctionComponent<{
  mealsList: fullMealDataT[];
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
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
            title={meal.title}
            ingredients={meal.ingredients}
            reciepe={meal.reciepe}
            openedRecipe={extendedID}
            onExtend={handleExtended}
            key={meal.id}
            onRemove={(id) => props.onRemove(id)}
            onEdit={(id) => props.onEdit(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
