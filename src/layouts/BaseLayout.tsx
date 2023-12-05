import TanStackRouterDevtools from '../routes/components/Router/RouterWithDevtool';
import { Outlet } from '@tanstack/react-router';

function BaseLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      {children ? children : <Outlet />}
      <TanStackRouterDevtools />
    </>
  );
}

export default BaseLayout;
