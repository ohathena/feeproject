import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';

const WinterCollection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 1, name: 'Wool Winter Coat', price: 7999, category: 'outerwear', image: '/products/coat1.jpg', rating: 4.9 },
    { id: 2, name: 'Cashmere Sweater', price: 5499, category: 'tops', image: '/products/jacket1.jpg', rating: 4.8 },
    { id: 3, name: 'Thermal Jacket', price: 4999, category: 'outerwear', image: '/products/jacket1.jpg', rating: 4.7 },
    { id: 4, name: 'Winter Dress', price: 3999, category: 'dresses', image: '/products/dress1.jpg', rating: 4.6 },
    { id: 5, name: 'Heavy Coat', price: 8999, category: 'outerwear', image: '/products/coat1.jpg', rating: 4.8 },
    { id: 6, name: 'Knit Cardigan', price: 3499, category: 'tops', image: '/products/jacket1.jpg', rating: 4.5 },
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'all' || p.category === selectedCategory) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-6xl font-serif text-gray-900 mb-4">Winter Essentials</h1>
          <p className="text-xl text-gray-600">20% OFF - Stay Warm</p>
        </motion.div>

        <div className="flex gap-8">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <FaFilter className="text-gray-600" />
              </div>
              <div className="mb-8">
                <h4 className="font-medium mb-4">Category</h4>
                <div className="space-y-2">
                  {['all', 'outerwear', 'tops', 'dresses'].map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input type="radio" name="category" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} className="mr-2" />
                      <span className="capitalize">{cat === 'all' ? 'All Items' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { label: 'All', range: [0, 15000] },
                    { label: 'Under ₹4000', range: [0, 4000] },
                    { label: '₹4000 - ₹6000', range: [4000, 6000] },
                    { label: 'Above ₹6000', range: [6000, 15000] },
                  ].map(option => (
                    <label key={option.label} className="flex items-center cursor-pointer">
                      <input type="radio" name="price" checked={priceRange[0] === option.range[0] && priceRange[1] === option.range[1]} onChange={() => setPriceRange(option.range)} className="mr-2" />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} Products</p>
              <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg">
                <FaFilter /> Filters
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10 }} className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg" onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}>
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
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
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="fashion" />
    </div>
  );
};

export default WinterCollection;
