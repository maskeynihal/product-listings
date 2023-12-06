import landingLayoutRoute from './layouts/LandingLayoutRoute';
import AllBeers from '@/pages/Beers/AllBeers';
import BeerDetail from '@/pages/Beers/BeerDetail';
import MyBeers from '@/pages/MyBeers/MyBeers';
import { Route, redirect } from '@tanstack/react-router';

export const indexRoute = new Route({
  id: 'indexRoute',
  getParentRoute: () => landingLayoutRoute,
  path: '/',
  beforeLoad: () => {
    //@ts-expect-error Type safety for routes
    throw redirect({ to: allBeers.to });
  },
  component: AllBeers,
});

export const allBeers = new Route({
  getParentRoute: () => landingLayoutRoute,
  path: '/all-beers',
  component: AllBeers,
});

export const beerDetail = new Route({
  getParentRoute: () => landingLayoutRoute,
  path: '/all-beers/$beerId',
  component: BeerDetail,
});

export const myBeers = new Route({
  getParentRoute: () => landingLayoutRoute,
  path: '/my-beers',
  component: MyBeers,
});
