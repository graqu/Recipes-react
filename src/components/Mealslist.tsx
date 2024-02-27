import React, { useContext, useState } from 'react';
import MealItem from './MealItem';
import { fullMealDataT } from '@/models/formData';
import { MealsContext } from '@/store/MealsContext';

const MealsList: React.FunctionComponent<{}> = () => {
  const [extendedID, setExtendedID] = useState('');

  const {mealsList, removeHandler, editionHandler } =
    useContext(MealsContext);

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
        {mealsList.map((meal: fullMealDataT) => (
          <MealItem
            id={meal.id}
            title={meal.title}
            ingredients={meal.ingredients}
            reciepe={meal.reciepe}
            openedRecipe={extendedID}
            onExtend={handleExtended}
            key={meal.id}
            onRemove={(id) => removeHandler(id)}
            onEdit={(id) => editionHandler(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
