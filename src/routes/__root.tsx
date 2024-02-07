import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import BaseCard from '../components/BaseCard';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/meals" className="[&.active]:font-bold">
          Meals
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <BaseCard>
        <Outlet />
      </BaseCard>
    </>
  ),
});
