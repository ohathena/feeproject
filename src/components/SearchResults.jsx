import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';
import { allProducts } from '../data/allProducts';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProducts([]);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = allProducts.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      const mainCategoryMatch = product.mainCategory.toLowerCase().includes(searchTerm);
      const subCategoryMatch = product.subCategory.toLowerCase().includes(searchTerm);
      
      return nameMatch || categoryMatch || mainCategoryMatch || subCategoryMatch;
    });

    setFilteredProducts(filtered);
  }, [query]);

  const getProductType = (product) => {
    if (product.mainCategory === 'beauty') {
      return 'beauty';
    }
    return 'fashion';
  };

  return (
    <div className="pt-[170px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-[1px] bg-gray-800 mx-auto mb-6" />
          <h1 className="text-6xl font-serif text-gray-900 mb-4">
            Search Results
          </h1>
          {query && (
            <p className="text-xl text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} for "{query}"
            </p>
          )}
        </motion.div>

        {/* Results */}
        {!query.trim() ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">Please enter a search query</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No products found for "{query}"</p>
            <p className="text-gray-500">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
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
                      e.target.src = 'https://via.placeholder.com/400x500?text=Product+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <WishlistButton product={product} />
                    <CartButton product={product} />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full capitalize">
                      {product.mainCategory === 'beauty' ? 'Beauty' : 'Fashion'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center text-amber-500">
                      <span className="mr-1">★</span>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

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

export default SearchResults;

