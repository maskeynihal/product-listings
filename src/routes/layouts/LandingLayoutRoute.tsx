import LandingLayout from '../../layouts/LandingLayout';
import { allBeers, indexRoute, myBeers } from '../routes';
import { RootRoute } from '@tanstack/react-router';

const landingLayoutRoute = new RootRoute({
  component: LandingLayout,
});

landingLayoutRoute.addChildren([indexRoute, allBeers, myBeers]);

export default landingLayoutRoute;
