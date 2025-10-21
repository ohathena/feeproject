/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar, FaFilter } from 'react-icons/fa';
import { useState } from 'react';

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Summer Floral Dress',
      category: 'Fashion',
      price: 89.99,
      rating: 4.8,
      image: '/products/new/dress1.jpg',
      tag: 'Just Launched'
    },
    {
      id: 2,
      name: 'Vitamin C Serum',
      category: 'Beauty',
      price: 59.99,
      rating: 4.9,
      image: '/products/new/serum1.jpg',
      tag: 'New In'
    },
    {
      id: 3,
      name: 'Designer Handbag',
      category: 'Accessories',
      price: 149.99,
      rating: 4.7,
      image: '/products/new/bag1.jpg',
      tag: 'Limited Edition'
    },
    {
      id: 4,
      name: 'Gold Plated Necklace',
      category: 'Jewelry',
      price: 79.99,
      rating: 4.8,
      image: '/products/new/necklace1.jpg',
      tag: 'Trending'
    },
    {
      id: 5,
      name: 'Silk Blouse',
      category: 'Fashion',
      price: 119.99,
      rating: 4.6,
      image: '/products/new/blouse1.jpg',
      tag: 'Just Launched'
    },
    {
      id: 6,
      name: 'Natural Face Cream',
      category: 'Beauty',
      price: 49.99,
      rating: 4.9,
      image: '/products/new/cream1.jpg',
      tag: 'New In'
    }
  ];

  const categories = ['All', 'Fashion', 'Beauty', 'Accessories', 'Jewelry'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-[144px]">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="/new-arrivals-hero.jpg" 
          alt="New Arrivals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-serif font-bold mb-4">New Arrivals</h1>
            <p className="text-xl mb-8">Discover Our Latest Collection</p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <FaFilter className="text-gray-600" />
              <div className="flex gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-rose-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-rose-300">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                    <FaHeart className="text-gray-600 hover:text-rose-500" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                    <FaShoppingCart className="text-gray-600 hover:text-rose-500" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-rose-500 text-white text-sm font-medium rounded-full">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <div className="flex items-center text-amber-500">
                    <FaStar className="mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-500">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-rose-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to get notified about new arrivals and exclusive offers</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-rose-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;