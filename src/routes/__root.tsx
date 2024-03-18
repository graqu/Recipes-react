import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Footer from '@/components/Footer';
import BaseCard from '../components/BaseCard';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Meals
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <main className="main">
        <BaseCard>
          <Outlet />
        </BaseCard>
      </main>
      <Footer />
    </>
  ),
});
