// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Bestsellers from './Bestsellers';

const Fashion = () => {
  const navigate = useNavigate();
  
  // Base path for GitHub Pages - change this to match your repo name
  const basePath = import.meta.env.BASE_URL || '/';
  
  const categories = [
    { name: 'Women', image: `${basePath}fashion/women.jpg` },
    { name: 'Men', image: `${basePath}fashion/men.jpg` },
    { name: 'Kids', image: `${basePath}fashion/kids.jpg` }
  ];

  const collections = [
    { name: 'Summer Collection', image: `${basePath}fashion/summer.jpg`, discount: '30% OFF', path: '/fashion/summer' },
    { name: 'Winter Essentials', image: `${basePath}fashion/winter.jpg`, discount: '20% OFF', path: '/fashion/winter' },
    { name: 'Accessories', image: `${basePath}fashion/accessories.jpg`, tag: 'NEW IN', path: '/fashion/accessories' }
  ];

  return (
    <div className="pt-[170px]">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        <img 
          src={`${basePath}fashion/hero-fashion.jpg`}
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-serif font-bold mb-4">Fashion Collection</h1>
            <p className="text-xl mb-8">Discover the Latest Trends</p>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/fashion/${category.name.toLowerCase()}`)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <Bestsellers />

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">New Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.name}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => navigate(collection.path)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end pb-8">
                    <h3 className="text-white text-2xl font-bold mb-2">{collection.name}</h3>
                    {collection.discount && (
                      <span className="px-4 py-1 bg-rose-500 text-white rounded-full text-sm font-medium">
                        {collection.discount}
                      </span>
                    )}
                    {collection.tag && (
                      <span className="px-4 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium">
                        {collection.tag}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fashion;