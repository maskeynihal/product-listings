import landingLayoutRoute from './layouts/LandingLayoutRoute';
import { allBeers, indexRoute, myBeers } from './routes';
import { Router } from '@tanstack/react-router';

landingLayoutRoute.addChildren([indexRoute, allBeers, myBeers]);

const router = new Router({
  routeTree: landingLayoutRoute,
});

export default router;

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
