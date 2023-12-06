import { allBeers, beerDetail, indexRoute, myBeers } from '../routes';
import LandingLayout from '@/layouts/LandingLayout';
import { RootRoute } from '@tanstack/react-router';

const landingLayoutRoute = new RootRoute({
  component: LandingLayout,
});

//@ts-expect-error Route type issue when using redirect
landingLayoutRoute.addChildren([indexRoute, allBeers, beerDetail, myBeers]);

export default landingLayoutRoute;
