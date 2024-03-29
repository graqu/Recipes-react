import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import MealsList from '../components/Mealslist';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

const testMeals = [
  { id: 'f001', name: 'Spaghetti', ingredients: ['pasta', 'sauce'] },
  {
    id: 'f002',
    name: 'Polis Schabowy',
    ingredients: ['pork', 'eggs', 'flour', 'breadcrumbs'],
  },
];

function Index() {
  return (
    <>
      <TheHeading>Your favorite recipes</TheHeading>
      <MealsList mealsList={testMeals} />
      <Button variant="secondary">Add new</Button>
    </>
  );
}
