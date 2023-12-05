import AllBeers from '../pages/Beers/AllBeers';
import MyBeers from '../pages/MyBeers/MyBeers';
import Landing from '../pages/landing/Landing';
import landingLayoutRoute from './layouts/LandingLayoutRoute';
import { Route } from '@tanstack/react-router';

export const indexRoute = new Route({ getParentRoute: () => landingLayoutRoute, path: '/', component: Landing });
export const allBeers = new Route({
  getParentRoute: () => landingLayoutRoute,
  path: '/all-beers',
  component: AllBeers,
});
export const myBeers = new Route({
  getParentRoute: () => landingLayoutRoute,
  path: '/my-beers',
  component: MyBeers,
});
