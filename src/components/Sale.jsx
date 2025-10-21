/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar, FaFire } from 'react-icons/fa';
import { useState } from 'react';

const Sale = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('All');

  const saleProducts = [
    {
      id: 1,
      name: 'Designer Evening Dress',
      category: 'Fashion',
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      rating: 4.8,
      image: '/products/sale/dress1.jpg',
      tag: 'Hot Deal'
    },
    {
      id: 2,
      name: 'Luxury Skincare Set',
      category: 'Beauty',
      originalPrice: 199.99,
      salePrice: 99.99,
      discount: 50,
      rating: 4.9,
      image: '/products/sale/skincare-set.jpg',
      tag: 'Best Seller'
    },
    // Add more products...
  ];

  const discountRanges = ['All', '50% OFF', '30% OFF', '20% OFF'];

  const filteredProducts = selectedDiscount === 'All' 
    ? saleProducts 
    : saleProducts.filter(product => `${product.discount}% OFF` === selectedDiscount);

  return (
    <div className="min-h-screen pt-[144px]">
      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-serif font-bold mb-4">Flash Sale</h1>
            <p className="text-2xl mb-8">Up to 50% Off on Premium Products</p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <span className="block text-4xl font-bold">24</span>
                <span>Hours</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">45</span>
                <span>Minutes</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">30</span>
                <span>Seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discount Filters */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <FaFire className="text-rose-500 text-xl" />
            <div className="flex gap-4">
              {discountRanges.map((discount) => (
                <button
                  key={discount}
                  onClick={() => setSelectedDiscount(discount)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedDiscount === discount
                      ? 'bg-rose-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-rose-50'
                  }`}
                >
                  {discount}
                </button>
              ))}
            </div>
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
                  <span className="px-4 py-2 bg-rose-500 text-white text-lg font-bold rounded-full">
                    {product.discount}% OFF
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
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-rose-500">
                      ${product.salePrice}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
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

      {/* Deal of the Day */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Deal of the Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/products/sale/deal1.jpg" 
                alt="Special Deal"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Premium Beauty Box</h3>
                  <p className="text-xl mb-4">Worth $299</p>
                  <p className="text-4xl font-bold text-rose-400 mb-6">Now $149</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 bg-white text-rose-500 rounded-full font-medium"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/products/sale/deal2.jpg" 
                alt="Special Deal"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Designer Collection</h3>
                  <p className="text-xl mb-4">Worth $499</p>
                  <p className="text-4xl font-bold text-rose-400 mb-6">Now $299</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 bg-white text-rose-500 rounded-full font-medium"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;