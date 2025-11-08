import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaFilter } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';
import { allProducts } from '../data/allProducts';

const Sale = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create sale products with discounts
  const saleProducts = allProducts.map((product, index) => {
    const discounts = [20, 30, 40, 50];
    const discount = discounts[index % discounts.length];
    const originalPrice = product.price;
    const salePrice = Math.round(product.price * (1 - discount / 100));
    
    return {
      ...product,
      originalPrice,
      salePrice,
      discount,
      tag: discount === 50 ? 'Hot Deal' : discount >= 40 ? 'Best Seller' : 'Sale',
    };
  }).slice(0, 24); // Show 24 products on sale

  const discountRanges = ['All', '50% OFF', '40% OFF', '30% OFF', '20% OFF'];

  const filteredProducts = selectedDiscount === 'All' 
    ? saleProducts 
    : saleProducts.filter(product => {
        const discountLabel = `${product.discount}% OFF`;
        return discountLabel === selectedDiscount;
      });

  // Countdown timer (24 hours from now)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getProductType = (product) => {
    if (product.mainCategory === 'beauty') {
      return 'beauty';
    }
    return 'fashion';
  };

  return (
    <div className="pt-[170px] min-h-screen bg-white">
      {/* Flash Sale Banner */}
      <div className="relative bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaFire className="text-3xl animate-pulse" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold">Flash Sale</h1>
            </div>
            <p className="text-xl sm:text-2xl mb-8 text-white/90">Up to 50% Off on Premium Products</p>
            <div className="flex justify-center gap-6 sm:gap-8 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[100px]">
                <span className="block text-4xl sm:text-5xl font-bold mb-2">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-sm sm:text-base uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[100px]">
                <span className="block text-4xl sm:text-5xl font-bold mb-2">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-sm sm:text-base uppercase tracking-wider">Minutes</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[100px]">
                <span className="block text-4xl sm:text-5xl font-bold mb-2">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-sm sm:text-base uppercase tracking-wider">Seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discount Filters */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <FaFilter className="text-gray-600 text-xl" />
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                {discountRanges.map((discount) => (
                  <button
                    key={discount}
                    onClick={() => setSelectedDiscount(discount)}
                    className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedDiscount === discount
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
                    }`}
                  >
                    {discount}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-gray-600 font-medium">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} on Sale
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg"
                onClick={() => {
                  setSelectedProduct({ ...product, price: product.salePrice });
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
                    <WishlistButton product={{ ...product, price: product.salePrice }} />
                    <CartButton product={{ ...product, price: product.salePrice }} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-rose-500 text-white text-sm font-bold rounded-full shadow-lg">
                      {product.discount}% OFF
                    </span>
                  </div>
                  {product.tag && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-amber-500">
                      <span className="mr-1">★</span>
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-rose-500">₹{product.salePrice.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Deal of the Day Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Deal of the Day</h2>
            <p className="text-xl text-gray-600">Exclusive Limited-Time Offers</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => {
                const beautyProduct = saleProducts.find(p => p.mainCategory === 'beauty');
                if (beautyProduct) {
                  setSelectedProduct({ ...beautyProduct, price: beautyProduct.salePrice });
                  setIsModalOpen(true);
                }
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=600&fit=crop" 
                alt="Premium Beauty Box"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-end">
                <div className="p-8 text-white w-full">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Premium Beauty Box</h3>
                  <p className="text-lg mb-4 text-white/90">Complete Skincare Collection</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-rose-400">₹2,999</span>
                    <span className="text-xl text-white/60 line-through">₹5,999</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => {
                const fashionProduct = saleProducts.find(p => p.mainCategory === 'fashion');
                if (fashionProduct) {
                  setSelectedProduct({ ...fashionProduct, price: fashionProduct.salePrice });
                  setIsModalOpen(true);
                }
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop" 
                alt="Designer Collection"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-end">
                <div className="p-8 text-white w-full">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Designer Collection</h3>
                  <p className="text-lg mb-4 text-white/90">Elegant Fashion Essentials</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-rose-400">₹4,999</span>
                    <span className="text-xl text-white/60 line-through">₹9,999</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
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

export default Sale;
