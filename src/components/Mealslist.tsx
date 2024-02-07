import React from 'react';
import MealItem from './MealItem';

const MealsList: React.FunctionComponent<{ mealsList: {}[] }> = (props) => {
  return (
    <div>
      <MealItem />
    </div>
  );
};

export default MealsList;
