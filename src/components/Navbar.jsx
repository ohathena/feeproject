/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { getCartCount } = useCart();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowProfileMenu(false);
    setIsAuthenticated(false);
    navigate('/login');
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-gray-800/90 backdrop-blur-sm text-white py-2 text-center text-xs sm:text-sm font-medium tracking-wider">
        <div className="flex items-center justify-center space-x-2 px-4">
          <span className="inline-block animate-pulse">✨</span>
          <p className="truncate">NEW COLLECTION LAUNCH - Get 50% Off on Your First Purchase!</p>
          <span className="inline-block animate-pulse">✨</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-between border-b border-gray-100">
            {/* Hamburger Menu Button (Mobile) */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden text-2xl text-gray-700 hover:text-rose-500 transition-colors"
            >
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Glamora Logo" className="h-12 sm:h-16 lg:h-20 w-auto" />
            </Link>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex items-center w-1/3">
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
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <Link to="/wishlist" className="text-xl sm:text-2xl text-gray-700 hover:text-rose-500 transition-colors">
                <FaHeart />
              </Link>
              <Link to="/cart" className="relative text-xl sm:text-2xl text-gray-700 hover:text-rose-500 transition-colors">
                <FaShoppingCart />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="text-xl sm:text-2xl text-gray-700 hover:text-rose-500 transition-colors"
                >
                  <FaUser />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
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

          {/* Lower Navbar Links (Desktop) */}
          <div className="hidden lg:flex h-12 items-center justify-center space-x-12">
            <Link to="/" className="text-gray-600 hover:text-rose-500 font-medium">Home</Link>
            <Link to="/fashion" className="text-gray-600 hover:text-rose-500 font-medium">Fashion</Link>
            <Link to="/beauty" className="text-gray-600 hover:text-rose-500 font-medium">Beauty</Link>
            <Link to="/new" className="text-gray-600 hover:text-rose-500 font-medium">New Arrivals</Link>
            <Link to="/sale" className="text-gray-600 hover:text-rose-500 font-medium">Sale</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-rose-500"
          >
            <FaTimes />
          </button>

          {/* Logo in Mobile Menu */}
          <div className="mb-8 mt-2">
            <img src="/logo.png" alt="Glamora Logo" className="h-16 w-auto" />
          </div>

          {/* Search Bar (Mobile) */}
          <div className="mb-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-rose-300 text-sm"
              />
              <FaSearch className="absolute right-4 top-3 text-gray-400 text-sm" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <Link 
              to="/" 
              className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/fashion" 
              className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-medium"
              onClick={closeMobileMenu}
            >
              Fashion
            </Link>
            <Link 
              to="/beauty" 
              className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-medium"
              onClick={closeMobileMenu}
            >
              Beauty
            </Link>
            <Link 
              to="/new" 
              className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-medium"
              onClick={closeMobileMenu}
            >
              New Arrivals
            </Link>
            <Link 
              to="/sale" 
              className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-medium"
              onClick={closeMobileMenu}
            >
              Sale
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;