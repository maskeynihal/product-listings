import BaseLayout from '@/layouts/BaseLayout';
import { RootRoute } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: BaseLayout,
});

export default rootRoute;
