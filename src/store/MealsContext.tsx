import { ReactNode, createContext, useEffect, useState } from 'react';
import { testMeals } from './testMeals';
import mealDataT from '@/models/formData';
import { fullMealDataT } from '@/models/formData';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { log } from 'console';
import { json } from 'stream/consumers';

interface MealsContextType {
  mealsList: fullMealDataT[];
  addHandler?: (data: mealDataT) => void;
  removeHandler?: (id: string) => void;
  editionHandler?: (id: string) => void;
  editionSubmitter?: (id: string, data: mealDataT) => void;
  resetEditorState: () => void;
  editionState: {
    active?: boolean;
    item?: mealDataT;
  };
  showModal?: boolean;
  openModal?: () => void;
  closeModal: () => void;
}

export const MealsContext = createContext<MealsContextType>({
  mealsList: [],
  addHandler: () => {},
  removeHandler: () => {},
  editionHandler: () => {},
  editionSubmitter: () => {},
  resetEditorState: () => {},
  editionState: { active: false },
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
});

const MealsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  let count = 0;
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
  useEffect(() => {
    const storedMeals = localStorage.getItem('mealsList');
    if (storedMeals) {
      setMealsList(JSON.parse(storedMeals));
      console.log(JSON.parse(storedMeals));
    } else {
      console.log('robimy listę od zera');
    }
  }, []);

  const addMealHandler = async (data: mealDataT) => {
    const id =
      data.title +
      Math.floor(Math.random() * 999) +
      Math.floor(Math.random() * 9);

    const newList = [
      ...mealsList,
      {
        id: id,
        title: data.title,
        ingredients: data.ingredients,
        reciepe: data.reciepe,
      },
    ];

    setMealsList(newList);
    updateLocalStorage(newList);
    setModalVisibility(false);
  };
  const closeModal = () => {
    resetState();
    setModalVisibility(false);
  };

  const updateLocalStorage = (newList: {}[]) => {
    localStorage.setItem('mealsList', JSON.stringify(newList));
    console.log('aktualizacja');
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
    updateLocalStorage(newArr);

    resetState();
    setModalVisibility(false);
  };

  const removeMeal = (id: string) => {
    const listCopy = mealsList;
    const newList = listCopy.filter((meal) => meal.id !== id);
    setMealsList(newList);
    updateLocalStorage(newList);
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
};

export default MealsContextProvider;
