import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import MealsList from '../components/Mealslist';
import { Button } from '@/components/ui/button';
import { MutableRefObject, useRef, useState } from 'react';
import Modal from '@/components/Modal';
import AddMealForm from '@/components/AddMealForm';
import mealDataT from '@/models/formData';

export const Route = createLazyFileRoute('/meals')({
  component: Meals,
});

const testMeals = [
  {
    id: 'f001',
    title: 'Spaghetti',
    ingredients: 'pasa,meat,sauce',
    reciepe: 'cook Pasta, fry meat and mix all with sauce. Enyoy!',
  },
  {
    id: 'f002',
    title: 'Scrumbled Eggs',
    ingredients: 'eggs,butter',
    reciepe: 'fry Eggs and cutted sausage on butter - Eat with bread',
  },
];

function Meals() {
  const [mealsList, setMealsList] = useState(testMeals);
  const [editionState, setEditionState] = useState({
    active: false,
    item: {
      id: '',
      title: '',
      ingredients: '',
      reciepe: '',
    },
  });
  const addModal = useRef<HTMLDialogElement>(null);

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
    if (addModal.current) {
      addModal.current.close();
    }
  };
  const closeModal = () => {
    setEditionState({
      active: false,
      item: {
        id: '',
        title: '',
        ingredients: '',
        reciepe: '',
      },
    });
    if (addModal.current) {
      addModal.current.close();
    }
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

    setEditionState({
      active: false,
      item: {
        id: '',
        title: '',
        ingredients: '',
        reciepe: '',
      },
    });
    if (addModal.current) {
      addModal.current.close();
    }
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
    if (addModal.current) {
      addModal.current.showModal();
    }
  };

  return (
    <>
      <TheHeading>Your favorite recipes</TheHeading>
      <MealsList
        mealsList={mealsList}
        onRemove={removeMeal}
        onEdit={openEditionMode}
      />
      <Button
        className="text-[14px] py-[14px] w-full"
        onClick={() => {
          if (addModal.current) {
            addModal.current.showModal();
          }
        }}
      >
        Add new
      </Button>
      <Modal ref={addModal} onClose={closeModal}>
        <AddMealForm
          onAdd={addMealHandler}
          onEdit={editMeal}
          item={editionState.item}
          editMode={editionState.active}
        />
      </Modal>
    </>
  );
}
