import { createContext } from 'react';
import { testMeals } from './testMeals';

export const MealsContext = createContext({
  mealsList: [],
  addHandler: () => {},
  removeHandler: () => {},
  editionHandler: () => {},
  editorState: {},
});
