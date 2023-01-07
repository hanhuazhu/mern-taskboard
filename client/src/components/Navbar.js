import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky flex justify-end px-4">
      <Link to="/"
        className="bg-neutral-700 text-white rounded-lg"
      >
        Home
      </Link>
    </nav>
  );
}

export default Navbar;