import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <>
      <TheHeading>About app</TheHeading>
    </>
  );
}
