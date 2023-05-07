import { NavLink } from "react-router-dom";
import logo from "../assets/logo-no-background.png";
import "./navbar.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

  const handleLogout = (e) => {
    // handle logout logic here
    e.preventDefault();

    localStorage.clear();

    toast.success("Logout-ed!");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-screen-md px-4">
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" exact>
            <img src={logo} alt="Logo" className="h-8" />
          </NavLink>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/dashboard"
                className="text-white font-medium hover:text-yellow-500"
                activeClassName="text-yellow-500"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/unverified-users"
                className="text-white font-medium hover:text-yellow-500"
                activeClassName="text-yellow-500"
              >
                Verify Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="text-white font-medium hover:text-yellow-500"
                activeClassName="text-yellow-500"
              >
                Users Lists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rides"
                className="text-white font-medium hover:text-yellow-500"
                activeClassName="text-yellow-500"
              >
                Rides
              </NavLink>
            </li>
            <li>
              <button
                className="text-white font-medium hover:text-yellow-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
