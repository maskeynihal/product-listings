import LandingLayout from '../../layouts/LandingLayout';
import { allBeers, beerDetail, indexRoute, myBeers } from '../routes';
import { RootRoute } from '@tanstack/react-router';

const landingLayoutRoute = new RootRoute({
  component: LandingLayout,
});

landingLayoutRoute.addChildren([indexRoute, allBeers, beerDetail, myBeers]);

export default landingLayoutRoute;
