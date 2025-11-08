import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';

const SummerCollection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 1, name: 'Floral Summer Dress', price: 2499, category: 'dresses', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvKKS9IksaChESp3bS3hedbZvjJoD78cgwmf3nUpMpNzp4Se8rjcl_3bL4AnFPWrI5Qh_kb_QW6L7lbzpq5v120dna-rbkHHDvxSSbxfo', rating: 4.7 },
    { id: 2, name: 'Light Cotton Shirt', price: 1499, category: 'tops', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAbSrNpj68AnXPnrFD-3Rs__HtwJtMaMhXk1V4XcZ05zX-YuOe4BB0m1j_HzRw_mz5I0afvnJQUyDCFFNs5kQYEdFyrZMvER59vqvlZ2qXzlr5joJ24vZJ9w', rating: 4.5 },
    { id: 3, name: 'Casual Summer Jacket', price: 2999, category: 'outerwear', image: '/products/jacket1.jpg', rating: 4.6 },
    { id: 4, name: 'Breezy Maxi Dress', price: 3499, category: 'dresses', image: '/products/dress1.jpg', rating: 4.8 },
    { id: 5, name: 'Linen Shorts', price: 1299, category: 'bottoms', image: '/products/summer1.jpg', rating: 4.4 },
    { id: 6, name: 'Summer Tank Top', price: 999, category: 'tops', image: '/products/summer1.jpg', rating: 4.3 },
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
          <h1 className="text-6xl font-serif text-gray-900 mb-4">Summer Collection</h1>
          <p className="text-xl text-gray-600">30% OFF - Limited Time</p>
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
                  {['all', 'dresses', 'tops', 'bottoms', 'outerwear'].map(cat => (
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
                    { label: 'All', range: [0, 10000] },
                    { label: 'Under ₹1500', range: [0, 1500] },
                    { label: '₹1500 - ₹2500', range: [1500, 2500] },
                    { label: 'Above ₹2500', range: [2500, 10000] },
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

export default SummerCollection;
