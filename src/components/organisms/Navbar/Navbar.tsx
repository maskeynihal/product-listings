import { FormModal } from '../../../pages/MyBeers/MyBeers';
import router from '../../../routes/router';
import { allBeers, myBeers } from '../../../routes/routes';
import Link from '../../atoms/Link/Link';
import { useState } from 'react';

function Navbar() {
  const currentPath = router.state.location.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <nav>
        <Link
          to={allBeers.to}
          className="mr-4"
        >
          All Beers
        </Link>
        <Link to={myBeers.to}>My Beers</Link>
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
