import { createLazyFileRoute } from '@tanstack/react-router';
import TheHeading from '../components/TheHeading';
import styles from './about.module.css';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className={styles.about}>
      <TheHeading>About app</TheHeading>
      <p>
        This application is an improved version of a previous project initially
        built with vanilla JavaScript &nbsp;
        <a
          href="https://github.com/graqu/Recipe_of_your_day"
          target="_blank"
          rel="noopener norefere"
          className={styles.link}
        >
          link
        </a>
      </p>
      <p>
        The upgraded application leverages the power of React, TypeScript, Vite,
        and TanStack Router to deliver a more robust, maintainable, and scalable
        solution.
      </p>
    </div>
  );
}
