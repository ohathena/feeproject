import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Glamora
            </h2>
            <p className="text-gray-300 mb-6">
              Discover the latest in fashion and beauty. Your one-stop destination for all things glamorous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/fashion" className="text-gray-300 hover:text-rose-400 transition-colors">Fashion</Link>
              </li>
              <li>
                <Link to="/beauty" className="text-gray-300 hover:text-rose-400 transition-colors">Beauty</Link>
              </li>
              <li>
                <Link to="/new" className="text-gray-300 hover:text-rose-400 transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-rose-400 transition-colors">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-rose-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-rose-400 transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-rose-400 transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-rose-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-rose-400" />
                <span className="text-gray-300">123 Fashion Street, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-rose-400" />
                <span className="text-gray-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-rose-400" />
                <span className="text-gray-300">contact@glamora.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Glamora. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
