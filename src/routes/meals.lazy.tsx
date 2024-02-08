import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import MealsList from '../components/Mealslist';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/meals')({
  component: Index,
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

function Index() {
  return (
    <>
      <TheHeading>Your favorite recipes</TheHeading>
      <MealsList mealsList={testMeals} />
      <Button variant="secondary" className="text-[14px] py-[14px] w-full">
        Add new
      </Button>
    </>
  );
}
