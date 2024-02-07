import './App.css';
import { RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { createRouter } from '@tanstack/react-router';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
