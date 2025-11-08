import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';

const Men = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 1, name: 'Classic Blazer', price: 5499, category: 'formal', image: 'https://image.hm.com/assets/hm/2d/be/2dbe6866931fc5635e1f08a6dc6fd79d4e1eb492.jpg?imwidth=2160', rating: 4.7 },
    { id: 2, name: 'Winter Overcoat', price: 6999, category: 'outerwear', image: 'https://image.hm.com/assets/hm/c7/d8/c7d84b0dc622e2d1a3d9973cc9865f586451cbf8.jpg?imwidth=2160', rating: 4.8 },
    { id: 3, name: 'Casual Jacket', price: 3999, category: 'casual', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRY6C5VxdKWfUL2jBAQw3cZNkE6QmcFdeM40bz5LZ8s_yjDtJEOFNz4l3t3W8sPaByqBkLyCPQ-b-aFRDKG2jUdPuNhGU6kvM-oZni76X0CD22DCcKhfO_p', rating: 4.5 },
    { id: 4, name: 'Summer Shirt', price: 1799, category: 'casual', image: '/products/summer1.jpg', rating: 4.3 },
    { id: 5, name: 'Premium Suit Jacket', price: 8999, category: 'formal', image: '/products/jacket1.jpg', rating: 4.9 },
    { id: 6, name: 'Trench Coat', price: 7499, category: 'outerwear', image: '/products/coat1.jpg', rating: 4.6 },
    { id: 7, name: 'Denim Jacket', price: 2999, category: 'casual', image: '/products/jacket1.jpg', rating: 4.4 },
    { id: 8, name: 'Linen Shirt', price: 1499, category: 'casual', image: '/products/summer1.jpg', rating: 4.2 },
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'all' || p.category === selectedCategory) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-6xl font-serif text-gray-900 mb-4">Men's Fashion</h1>
          <p className="text-xl text-gray-600">Elevate Your Style</p>
        </motion.div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}
          >
            <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <FaFilter className="text-gray-600" />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Category</h4>
                <div className="space-y-2">
                  {['all', 'formal', 'casual', 'outerwear'].map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mr-2"
                      />
                      <span className="capitalize">{cat === 'all' ? 'All Items' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { label: 'All', range: [0, 10000] },
                    { label: 'Under ₹2000', range: [0, 2000] },
                    { label: '₹2000 - ₹4000', range: [2000, 4000] },
                    { label: '₹4000 - ₹6000', range: [4000, 6000] },
                    { label: 'Above ₹6000', range: [6000, 10000] },
                  ].map(option => (
                    <label key={option.label} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange[0] === option.range[0] && priceRange[1] === option.range[1]}
                        onChange={() => setPriceRange(option.range)}
                        className="mr-2"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} Products</p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                <FaFilter /> Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
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
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <WishlistButton product={product} />
                      <CartButton product={product} />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">₹{product.price}</p>
                      <div className="flex items-center text-amber-500">
                        <span className="mr-1">★</span>
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="fashion"
      />
    </div>
  );
};

export default Men;