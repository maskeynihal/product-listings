import LandingLayout from '../../layouts/LandingLayout';
import { RootRoute } from '@tanstack/react-router';

const landingLayoutRoute = new RootRoute({
  component: LandingLayout,
});

export default landingLayoutRoute;
