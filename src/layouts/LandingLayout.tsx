import Navbar from '../components/organisms/Navbar/Navbar';
import BaseLayout from './BaseLayout';
import { Outlet } from '@tanstack/react-router';

function LandingLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="container mx-auto sm:p-4">
      <BaseLayout>
        <Navbar />

        {children ? children : <Outlet />}
      </BaseLayout>
    </div>
  );
}

export default LandingLayout;
