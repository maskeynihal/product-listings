import Link from '@/components/atoms/Link/Link';
import { FormModal } from '@/pages/MyBeers/MyBeers';
import router from '@/routes/router';
import { allBeers, myBeers } from '@/routes/routes';
import { useState } from 'react';

function Navbar() {
  const currentPath = router.state.location.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between mb-4">
      <nav>
        <Link
          //@ts-expect-error The route needs to be type safety
          to={allBeers.to}
          className="mr-4"
        >
          All Beers
        </Link>
        <Link
          //@ts-expect-error The route needs to be type safety
          to={myBeers.to}
        >
          My Beers
        </Link>
      </nav>

      {currentPath === myBeers.to && (
        <div className="">
          <button
            className="rounded bg-blue-400 hover:bg-blue-600 text-white px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            Add a new beer
          </button>
          <FormModal
            isOpen={isModalOpen}
            setModalClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
