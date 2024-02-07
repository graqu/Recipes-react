import { createLazyFileRoute, redirect } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';

export const Route = createLazyFileRoute('/')({
  component: Index,
});



function Index() {
  return (
    <>
      <TheHeading>Welcome Adventurer</TheHeading>
    </>
  );
}
