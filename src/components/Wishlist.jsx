import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-8">My Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl text-gray-600">Your wishlist is empty</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">₹{item.price}</p>
                  <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                    <button 
                      className="text-rose-500 hover:text-rose-600"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;