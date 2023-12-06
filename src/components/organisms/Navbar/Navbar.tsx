import { allBeers } from '../../../routes/routes';
import Link from '../../atoms/Link/Link';

function Navbar() {
  return (
    <>
      <Link
        to={allBeers.to}
        className="mr-4"
      >
        All Beers
      </Link>
      <Link to="/my-beers">My Beers</Link>
    </>
  );
}

export default Navbar;
