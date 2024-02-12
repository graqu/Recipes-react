import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import MealsList from '../components/Mealslist';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import Modal from '@/components/Modal';
import AddMealForm from '@/components/AddMealForm';

export const Route = createLazyFileRoute('/meals')({
  component: Meals,
});

const testMeals = [
  {
    id: 'f001',
    name: 'Spaghetti',
    ingredients: ['pasa,meat,sauce'],
    reciepe: 'cook Pasta, fry meat and mix all with sauce. Enyoy!',
  },
  {
    id: 'f002',
    name: 'Scrumbled Eggs',
    ingredients: ['pasa,meat,sauce'],
    reciepe: 'fry Eggs and cutted sausage on butter - Eat with bread',
  },
];

function Meals() {
  const [mealsList, setMealsList] = useState(testMeals);
  const addModal = useRef();

  const addMealHandler = (data) => {
    const id =
      data.title +
      Math.floor(Math.random() * 999) +
      Math.floor(Math.random() * 9);

    setMealsList((prevState) => [
      ...prevState,
      {
        id: id,
        name: data.title,
        ingredients: data.ingredients,
        reciepe: data.description,
      },
    ]);
    addModal.current.close();
  };

  const removeMeal = (id) => {
    const listCopy = mealsList;
    const newList = listCopy.filter((meal) => meal.id !== id);
    setMealsList(newList);
  };

  return (
    <>
      <TheHeading>Your favorite recipes</TheHeading>
      <MealsList mealsList={mealsList} onRemove={removeMeal} />
      <Button
        className="text-[14px] py-[14px] w-full"
        onClick={() => {
          addModal.current.showModal();
        }}
      >
        Add new
      </Button>
      <Modal ref={addModal}>
        <TheHeading>Add new Meal</TheHeading>
        <AddMealForm onAdd={addMealHandler} />
      </Modal>
    </>
  );
}
