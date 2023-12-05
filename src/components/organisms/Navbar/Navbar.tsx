import { Link } from '@tanstack/react-router';

function Navbar() {
  return (
    <>
      <Link to="/all-beers">All Beers</Link>
      <Link to="/my-beers">My Beers</Link>
    </>
  );
}

export default Navbar;
