import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          PGFinder
        </NavLink>

        <div className="space-x-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
