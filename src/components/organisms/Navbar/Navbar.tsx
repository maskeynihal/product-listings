import Button from '@/components/atoms/Button/Button';
import Link from '@/components/atoms/Link/Link';
import CreateBeerFormModal from '@/pages/MyBeers/components/CreateBeerFormModal';
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
          <Button onClick={() => setIsModalOpen(true)}>Add a new beer</Button>
          <CreateBeerFormModal
            isOpen={isModalOpen}
            setModalClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
