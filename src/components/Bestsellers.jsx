/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';
import WishlistButton from './WishlistButton';
import CartButton from './CartButton';

const Bestsellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Base path for GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/';

  const products = [
    {
      id: 1,
      name: 'Designer Floral Dress',
      price: 4999,
      image: `${basePath}products/dress1.jpg`,
      category: 'dresses',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Classic Macrocannage Jacket',
      price: 6999,
      image: `${basePath}products/jacket1.jpg`,
      category: 'outerwear',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Dior Oblique Short-Sleeved Shirt',
      price: 2999,
      image: `${basePath}products/summer1.jpg`,
      category: 'tops',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Premium Black Coat',
      price: 7999,
      image: `${basePath}products/coat1.jpg`,
      category: 'outerwear',
      rating: 4.7
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <WishlistButton product={product} />
                  <CartButton product={product} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-rose-500 font-bold">₹{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="fashion"
      />
    </section>
  );
};

export default Bestsellers;