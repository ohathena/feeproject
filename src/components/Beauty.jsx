import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';

const Beauty = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = [
    { name: 'Skincare', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop', path: '/beauty/skincare' },
    { name: 'Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop', path: '/beauty/makeup' },
    { name: 'Haircare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop', path: '/beauty/haircare' },
    { name: 'Fragrances', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop', path: '/beauty/fragrance' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Luxury Face Serum',
      price: 2499,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop',
      category: 'Skincare'
    },
    {
      id: 2,
      name: 'Matte Lipstick Set',
      price: 1499,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop',
      category: 'Makeup'
    },
    {
      id: 3,
      name: 'Hair Treatment Oil',
      price: 1799,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop',
      category: 'Haircare'
    }
  ];

  const beautyTips = [
    {
      title: 'Morning Skincare Routine',
      description: 'Start your day with these essential steps',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
      path: '/beauty/tips/skincare-routine'
    },
    {
      title: 'Perfect Makeup Base',
      description: 'Create a flawless foundation',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop',
      path: '/beauty/tips/makeup-base'
    },
    {
      title: 'Natural Hair Care',
      description: 'Tips for healthy, shiny hair',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop',
      path: '/beauty/tips/hair-care'
    }
  ];

  const bestsellers = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      price: 2499,
      originalPrice: 3499,
      rating: 4.9,
      sales: 1500,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Hydrating Face Cream',
      price: 2199,
      originalPrice: 2999,
      rating: 4.8,
      sales: 1200,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
      tag: 'Popular'
    },
    {
      id: 3,
      name: 'Rose Gold Brush Set',
      price: 2499,
      originalPrice: 3999,
      rating: 4.7,
      sales: 800,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop',
      tag: 'Limited Edition'
    }
  ];

  const specialOffers = [
    {
      title: 'Summer Beauty Box',
      discount: '40% OFF',
      description: 'Get your glow on with our summer essentials',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
      endDate: '2024-08-31',
      path: '/beauty/makeup'
    },
    {
      title: 'Luxury Skincare Set',
      discount: '30% OFF',
      description: 'Premium skincare collection',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=600&fit=crop',
      endDate: '2024-08-25',
      path: '/beauty/skincare'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen pt-[144px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] overflow-hidden"
        variants={itemVariants}
      >
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&h=900&fit=crop" 
          alt="Beauty Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            variants={itemVariants}
          >
            <h1 className="text-7xl font-serif font-bold mb-6">Beauty Essentials</h1>
            <p className="text-2xl mb-8">Enhance your natural beauty</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 rounded-full font-medium shadow-lg"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        className="max-w-7xl mx-auto py-16 px-6"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">Shop by Category</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => navigate(category.path)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 space-y-2">
                    <WishlistButton product={product} />
                    <CartButton product={product} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <span className="flex items-center text-amber-500">
                      <FaStar className="mr-1" />
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-rose-500">₹{product.price}</span>
                    <button className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-serif font-bold">Bestsellers</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 text-rose-500 border border-rose-500 rounded-full hover:bg-rose-50"
            >
              View All
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 space-y-2">
                    <WishlistButton product={product} />
                    <CartButton product={product} />
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
                  <p className="text-gray-600 mb-4">{product.sales.toLocaleString()} sold</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-rose-500">₹{product.price}</span>
                      <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                    <button className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => navigate(offer.path)}
              >
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-gray-600 mb-4">{offer.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-rose-500 font-bold text-xl">{offer.discount}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600"
                          onClick={(e) => { e.stopPropagation(); navigate(offer.path); }}
                        >
                          Shop Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-xl mb-8">Get an extra 20% off on all premium beauty products</p>
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <span className="block text-4xl font-bold">48</span>
              <span>Hours</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold">35</span>
              <span>Minutes</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold">20</span>
              <span>Seconds</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/beauty/makeup')}
            className="px-8 py-3 bg-white text-rose-500 rounded-full font-medium hover:bg-gray-100"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Beauty Community</h2>
          <p className="text-gray-600 mb-8">Subscribe to receive beauty tips, exclusive offers, and new product alerts</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-rose-300"
            />
            <button className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Beauty Tips & Tutorials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Beauty Tips & Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beautyTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => navigate(tip.path)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{tip.title}</h3>
                    <p className="text-white/90 text-sm">{tip.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 px-6 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white w-fit"
                    >
                      Read More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="beauty" />
    </motion.div>
  );
};

export default Beauty;