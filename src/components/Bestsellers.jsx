// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Bestsellers = () => {
  const products = [
    {
      id: 1,
      name: 'Designer Floral Dress',
      price: 129.99,
      image: '/products/dress1.jpg',
      category: 'Women'
    },
    {
      id: 2,
      name: 'Classic Macrocannage Jacket',
      price: 199.99,
      image: '/products/jacket1.jpg',
      category: 'Women'
    },
    {
      id: 3,
      name: 'Dior Oblique Short-Sleeved Shirt',
      price: 89.99,
      image: '/products/summer1.jpg',
      category: 'Men'
    },
    {
      id: 4,
      name: 'Premium Black Coat',
      price: 79.99,
      image: '/products/coat1.jpg',
      category: 'Men'
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
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                    <FaHeart className="text-gray-600 hover:text-rose-500" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                    <FaShoppingCart className="text-gray-600 hover:text-rose-500" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-rose-500 font-bold">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;