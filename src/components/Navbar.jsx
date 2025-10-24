/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowProfileMenu(false);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-gray-800/90 backdrop-blur-sm text-white py-2 text-center text-sm font-medium tracking-wider">
        <div className="flex items-center justify-center space-x-2">
          <span className="inline-block animate-pulse">✨</span>
          <p>NEW COLLECTION LAUNCH - Get 50% Off on Your First Purchase!</p>
          <span className="inline-block animate-pulse">✨</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between border-b border-gray-100">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Glamora Logo" className="h-20 w-auto" />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center w-1/3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-rose-300"
                />
                <FaSearch className="absolute right-4 top-3 text-gray-400" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-8">
              <Link to="/wishlist" className="text-2xl text-gray-700 hover:text-rose-500 transition-colors">
                <FaHeart />
              </Link>
              <Link to="/cart" className="text-2xl text-gray-700 hover:text-rose-500 transition-colors">
                <FaShoppingCart />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="text-2xl text-gray-700 hover:text-rose-500 transition-colors"
                >
                  <FaUser />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-rose-50">
                      Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-rose-50">
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lower Navbar Links */}
          <div className="h-12 flex items-center justify-center space-x-12">
            <Link to="/" className="text-gray-600 hover:text-rose-500 font-medium">Home</Link>
            <Link to="/fashion" className="text-gray-600 hover:text-rose-500 font-medium">Fashion</Link>
            <Link to="/beauty" className="text-gray-600 hover:text-rose-500 font-medium">Beauty</Link>
            <Link to="/new" className="text-gray-600 hover:text-rose-500 font-medium">New Arrivals</Link>
            <Link to="/sale" className="text-gray-600 hover:text-rose-500 font-medium">Sale</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
