// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Women = () => {
  const navigate = useNavigate();
  const ageGroups = [
    { name: 'Baby (0-3)', image: '/fashion/kids/baby.jpg', path: '/fashion/kids/baby' },
    { name: 'Toddler (3-5)', image: '/fashion/kids/toddler.jpg', path: '/fashion/kids/toddler' },
    { name: 'Little Kids (5-7)', image: '/fashion/kids/little-kids.jpg', path: '/fashion/kids/little-kids' },
    { name: 'Big Kids (7-12)', image: '/fashion/kids/big-kids.jpg', path: '/fashion/kids/big-kids' },
    { name: 'Teens (12+)', image: '/fashion/kids/teens.jpg', path: '/fashion/kids/teens' }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50">
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

export default Women;