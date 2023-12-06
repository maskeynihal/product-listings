import landingLayoutRoute from './layouts/LandingLayoutRoute';
import { Router } from '@tanstack/react-router';

const router = new Router({
  routeTree: landingLayoutRoute,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
