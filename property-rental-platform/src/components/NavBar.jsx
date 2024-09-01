import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function NavBar({ setIsAuthenticated, setCartItems }) {
  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("username");
    setIsAuthenticated(false);
    setCartItems([]);
  };

  const username = sessionStorage.getItem("username");
  return (
    <nav className="bg-white shadow-md py-4 px-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-150 ease-in-out flex items-center"
          >
            <FaHome className="mr-2" />
            
          </Link>
        </div>
        <div className="flex space-x-4">
          {username ? (
            <>
              <span className="text-xl text-gray-800 flex items-center">
                @{username}!
              </span>
              {setIsAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex text-xs lg:text-sm items-center  bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-150 ease-in-out"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              )}
            </>
          ) : (
            <span>Please log in</span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="text-2xl text-gray-800 hover:text-blue-600 transition duration-150 ease-in-out flex items-center"
          >
            <FaShoppingCart className="mr-2" />
           
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
