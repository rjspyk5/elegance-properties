import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

export const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-first focus:bg-first" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/updateprofile"
            className={({ isActive }) =>
              isActive ? "bg-first focus:bg-first" : ""
            }
          >
            Update Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "bg-first focus:bg-first" : ""
            }
          >
            Wishlist
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-first focus:bg-first" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#ffffff1e]  shadow-2xl lg:px-11">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" px-1 md:pr-4 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="font-bold md:text-xl animate__animated animate__swing"
          >
            Elegance Properties
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div
                className="tooltip  tooltip-left"
                data-tip={`${
                  user?.displayName ? user.displayName : "Annonymus"
                }`}
              >
                <img
                  className="md:w-10 w-8 rounded-full avatar animate__animated animate__jackInTheBox"
                  src={user.photoURL}
                  alt="not available"
                />
              </div>

              <button
                onClick={logOut}
                className="btn h-9 px-4 md:px-5 md:h-10 bg-second  min-h-4 animate__animated animate__bounce "
              >
                Logout
              </button>
            </div>
          ) : loading ? (
            <span className="loading loading-spinner text-info"></span>
          ) : (
            <Link
              to="/login"
              className="btn h-9 px-4 md:px-5 md:h-10 bg-second  min-h-4 animate__animated animate__bounce "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
