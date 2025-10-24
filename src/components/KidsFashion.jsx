// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const KidsFashion = () => {
  const navigate = useNavigate();
  const ageGroups = [
    { name: 'Baby (0-3)', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=500&fit=crop', path: '/fashion/kids/baby' },
    { name: 'Toddler (3-5)', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=500&fit=crop', path: '/fashion/kids/toddler' },
    { name: 'Little Kids (5-7)', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', path: '/fashion/kids/little-kids' },
    { name: 'Big Kids (7-12)', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop', path: '/fashion/kids/big-kids' },
    { name: 'Teens (12+)', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop', path: '/fashion/kids/teens' }
  ];

  return (
    <div className="pt-[170px] min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Kids Fashion
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => navigate(group.path)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <img 
                    src={group.image} 
                    alt={group.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                  <button className="text-primary-500 group-hover:text-primary-600 font-medium">
                    Shop Now →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsFashion;