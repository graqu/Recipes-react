import { createContext, useState } from 'react';
import { testMeals } from './testMeals';
import mealDataT from '@/models/formData';

export const MealsContext = createContext({
  mealsList: [],
  addHandler: () => {},
  removeHandler: () => {},
  editionHandler: () => {},
  editionSubmitter: () => {},
  resetEditorState: () => {},
  editionState: {},
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export default function MealsContextProvider({ children }) {
  const [mealsList, setMealsList] = useState(testMeals);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [editionState, setEditionState] = useState({
    active: false,
    item: {
      id: '',
      title: '',
      ingredients: '',
      reciepe: '',
    },
  });

  const addMealHandler = (data: mealDataT) => {
    const id =
      data.title +
      Math.floor(Math.random() * 999) +
      Math.floor(Math.random() * 9);

    setMealsList((prevState) => [
      ...prevState,
      {
        id: id,
        title: data.title,
        ingredients: data.ingredients,
        reciepe: data.reciepe,
      },
    ]);
    setModalVisibility(false);
  };
  const closeModal = () => {
    resetState();
    setModalVisibility(false);
  };

  const editMeal = (id: string, data: mealDataT) => {
    const newArr = mealsList;
    const mealIndex = newArr.findIndex((meal) => meal.id === id);

    newArr[mealIndex] = {
      id: id,
      title: data.title,
      ingredients: data.ingredients,
      reciepe: data.reciepe,
    };

    setMealsList(newArr);

    resetState();
    setModalVisibility(false);
  };

  const removeMeal = (id: string) => {
    const listCopy = mealsList;
    const newList = listCopy.filter((meal) => meal.id !== id);
    setMealsList(newList);
  };

  const openEditionMode = (id: string) => {
    const arrCopy = mealsList;
    const mealToEdit = arrCopy.find((meal) => meal.id === id);

    if (mealToEdit) {
      setEditionState({
        active: true,
        item: {
          id: id,
          title: mealToEdit.title,
          ingredients: mealToEdit.ingredients,
          reciepe: mealToEdit.reciepe,
        },
      });
    }
    setModalVisibility(true);
  };

  const resetState = () => {
    setEditionState({
      active: false,
      item: {
        id: '',
        title: '',
        ingredients: '',
        reciepe: '',
      },
    });
  };
  const showModal = () => {
    setModalVisibility(true);
  };

  const ctxValue = {
    mealsList: mealsList,
    addHandler: addMealHandler,
    removeHandler: removeMeal,
    editionHandler: openEditionMode,
    editionSubmitter: editMeal,
    resetEditorState: resetState,
    editionState: editionState,
    showModal: modalVisibility,
    openModal: showModal,
    closeModal: closeModal,
  };
  return (
    <MealsContext.Provider value={ctxValue}>{children}</MealsContext.Provider>
  );
}
