import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaStar } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';
import { allProducts } from '../data/allProducts';

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get latest products (simulate new arrivals by taking recent products)
  const newArrivalProducts = allProducts.slice(0, 18).map((product, index) => ({
    ...product,
    tag: index < 6 ? 'Just Launched' : index < 12 ? 'New In' : 'Trending',
    arrivalDate: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString(), // Simulate different arrival dates
  }));

  const categories = ['All', 'Fashion', 'Beauty'];

  const filteredProducts = selectedCategory === 'All' 
    ? newArrivalProducts 
    : newArrivalProducts.filter(product => {
        if (selectedCategory === 'Fashion') return product.mainCategory === 'fashion';
        if (selectedCategory === 'Beauty') return product.mainCategory === 'beauty';
        return true;
      });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return new Date(b.arrivalDate) - new Date(a.arrivalDate);
    }
  });

  const getProductType = (product) => {
    if (product.mainCategory === 'beauty') {
      return 'beauty';
    }
    return 'fashion';
  };

  return (
    <div className="pt-[170px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop" 
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-6"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaStar className="text-4xl animate-pulse text-rose-400" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold">New Arrivals</h1>
            </div>
            <div className="w-24 h-[1px] bg-white/60 mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
              Discover Our Latest Collection - Fresh Styles & Premium Beauty Essentials
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-gray-50 py-8 border-b border-gray-200 sticky top-[170px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <FaFilter className="text-gray-600 text-xl" />
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-gray-600 font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-rose-500 bg-white text-gray-700"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          <p className="text-gray-600 font-medium mt-4">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'} Available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {sortedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg"
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <WishlistButton product={product} />
                    <CartButton product={product} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full capitalize">
                      {product.mainCategory === 'beauty' ? 'Beauty' : 'Fashion'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-500">
                      <span className="mr-1">★</span>
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Featured New Arrivals Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Featured This Week</h2>
            <p className="text-xl text-gray-600">Handpicked selections just for you</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProducts.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full mb-2 inline-block">
                      {product.tag}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold">₹{product.price.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-4xl text-rose-400 mx-auto mb-4" />
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to get notified about new arrivals and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-rose-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={selectedProduct ? getProductType(selectedProduct) : 'fashion'}
      />
    </div>
  );
};

export default NewArrivals;
