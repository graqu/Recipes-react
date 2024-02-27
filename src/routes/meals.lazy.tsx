import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import MealsList from '../components/Mealslist';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useContext } from 'react';
import { MealsContext } from '@/store/MealsContext';
import Modal from '@/components/Modal';
import AddMealForm from '@/components/AddMealForm';

export const Route = createLazyFileRoute('/meals')({
  component: Meals,
});

function Meals() {
  const addModal = useRef<HTMLDialogElement>(null);
  const { showModal, closeModal, openModal } = useContext(MealsContext);

  useEffect(() => {
    if (showModal && addModal.current) {
      addModal.current.showModal();
    } else if (!showModal && addModal.current) {
      addModal.current.close();
    }
  }, [showModal]);

  return (
    <>
      <TheHeading>Your favorite recipes</TheHeading>
      <MealsList />
      <Button className="text-[14px] py-[14px] w-full" onClick={openModal}>
        Add new
      </Button>
      <Modal ref={addModal} onClose={closeModal}>
        <AddMealForm />
      </Modal>
    </>
  );
}
